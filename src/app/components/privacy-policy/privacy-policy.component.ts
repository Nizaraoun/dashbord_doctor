import { Component } from '@angular/core';
import { SidenavComponent } from "../sidenav/sidenav.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'hospital-privacy-policy',
    standalone: true,
    templateUrl: './privacy-policy.component.html',
    styleUrls: ['./privacy-policy.component.scss'],
    imports: [SidenavComponent, NavbarComponent]
})
export class PrivacyPolicyComponent {

}
