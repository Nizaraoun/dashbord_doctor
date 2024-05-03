import { Component } from '@angular/core';
import { HighchartsChartModule } from "highcharts-angular";
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { RouterLink } from "@angular/router";
import { SidenavComponent } from "../../../components/sidenav/sidenav.component";

@Component({
  selector: 'hospital-doctor-profile',
  standalone: true,
  imports: [
    RouterLink,
    SidenavComponent,
    NavbarComponent,
    HighchartsChartModule,
  ],
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.scss']
})
export class DoctorProfileComponent {

}
