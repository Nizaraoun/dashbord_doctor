import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { SidbarComponent } from "../../sidbar/sidbar.component";
import { CommonModule } from '@angular/common';
import { Doctor } from '../../interface/doctor';
import { WebService } from '../../service/web.service';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-newdoctor',
    standalone: true,
    templateUrl: './newdoctor.component.html',
    styleUrl: './newdoctor.component.scss',
    imports: [NavbarComponent, SidbarComponent,
        CommonModule,
    
    ]
})
export class NewdoctorComponent  implements OnInit{
    doctors: Doctor[] = [];

   
    constructor(
        private webService: WebService,
        private messageService: MessageService
    ){}
    ngOnInit(): void {
        this.webService.getNewDoctor().subscribe((data: Doctor[]) => {
            this.doctors = data;
        });
      } 

    desapprouverdoctor(id :string ) {
            this.doctors=this.doctors.filter((doctor) => doctor.id !== id);

            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Doctor desapprouved successfully' });

  
    }
    approuverdoctor(id :string) {
        this.webService.approuverdoctor(id).subscribe((data: Doctor[]) => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Doctor approuved successfully' });
            this.doctors=this.doctors.filter((doctor) => doctor.id !== id);
        });
    }

}
