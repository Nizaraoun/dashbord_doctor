import { HighchartsChartModule } from "highcharts-angular";
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { SidenavComponent } from "../../../components/sidenav/sidenav.component";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";



@Component({
  selector: 'hospital-patient-profile',
  standalone: true,
  imports: [
    RouterLink,
    SidenavComponent,
    NavbarComponent,
    HighchartsChartModule,
  ],
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss']
})
export class PatientProfileComponent  {
 
}
