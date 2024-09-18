
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { co } from '@fullcalendar/core/internal-common';
import { SidbarComponent } from '../../admindashbord/sidbar/sidbar.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SidenavComponent } from "../../sidenav/sidenav.component";
import { WebService } from '../../admindashbord/service/web.service';
import { Router } from '@angular/router';
import { subscribeService } from 'src/app/services/subscription.service';
import { MessageService } from 'primeng/api';
import { planvalue } from '../../constants/socketUrl';

@Component({
    selector: 'hospital-payment',
    standalone: true,
    templateUrl: './credit-card.component.html',
    styleUrls: ['./credit-card.component.scss'],
    imports: [
        SidbarComponent,
        NavbarComponent,
        CommonModule,
        FormsModule,
        SidenavComponent
    ]
})
export class CreditCardComponent implements OnInit{
  ngOnInit(): void {
    this.token = localStorage.getItem('accessToken') || '';
    this.id = localStorage.getItem('id') || '';
  }
  constructor(
    private SubscribeService: subscribeService,
    private router: Router,
    private messageService: MessageService
  ) { }
  fields = {
    cardnumber: '',
    cardholder: '',
    exp: '',
    cvc: ''
  };
  id  :string = '';
  token :string = '';
  plan :string = '';
  valid = false;

  formatCardNumber(number: string): string {
    return number.replace(/[^0-9]/gi, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
  }

  formatExp(number: string): string {
    return number.replace(/[^0-9]/gi, '').slice(0, 4).replace(/(.{2})/, '$1\/').trim();
  }

  validate() {
    this.valid = Object.values(this.fields).every(value => value.length > 0);
  }

  onKeyDown(event: KeyboardEvent, maxLength: number) {
    const input = event.target as HTMLInputElement;
    if (input.value.length > maxLength && event.key !== 'Backspace' && event.key !== 'Tab' && event.key !== 'Delete') {
      event.preventDefault();
    }
  }

  onSubmit() {

    this.SubscribeService.getplans().subscribe(plan => {
      this.plan = plan;
  });
this.SubscribeService.addSubscribe(this.id ,this.plan,this.token).subscribe((data: any) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Subscription added successfully ' });
        this.router.navigate(['/dashboard-home']);
      });
      
  
}
}