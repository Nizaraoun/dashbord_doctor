import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { SidenavComponent } from "../../sidenav/sidenav.component";

@Component({
    selector: 'hospital-subscription',
    standalone: true,
    templateUrl: './subscription.component.html',
    styleUrls: ['./subscription.component.scss'],
    imports: [NavbarComponent, SidenavComponent]
})
export class SubscriptionComponent {

}
