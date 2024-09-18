import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { SidenavComponent } from "../../sidenav/sidenav.component";
import { Router } from '@angular/router';
import { subscribeService } from 'src/app/services/subscription.service';

@Component({
    selector: 'hospital-subscription',
    standalone: true,
    templateUrl: './subscription.component.html',
    styleUrls: ['./subscription.component.scss'],
    imports: [NavbarComponent, SidenavComponent]
})
export class SubscriptionComponent {
    constructor(
        private router: Router  ,
        private subscriptionservice: subscribeService
    ) { }
gotTo(plan :string) {
    this.subscriptionservice.setPlans(plan);
    this.router.navigate(['/payment']);

    }

}
