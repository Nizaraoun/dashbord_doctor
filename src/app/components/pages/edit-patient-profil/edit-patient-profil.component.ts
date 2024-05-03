import { HighchartsChartModule } from "highcharts-angular";
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { RouterLink } from "@angular/router";
import { SidenavComponent } from "../../../components/sidenav/sidenav.component";import { Component } from '@angular/core';

@Component({
  selector: 'hospital-edit-patient-profil',
  standalone: true,
  imports: [
    RouterLink,
    SidenavComponent,
    NavbarComponent,
    HighchartsChartModule,
  ],
  templateUrl: './edit-patient-profil.component.html',
  styleUrls: ['./edit-patient-profil.component.scss']
})
export class EditPatientProfilComponent {

}
