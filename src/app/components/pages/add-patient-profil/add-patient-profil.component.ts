import { HighchartsChartModule } from "highcharts-angular";
import { NavbarComponent } from "../../navbar/navbar.component";
import { RouterLink } from "@angular/router";
import { SidenavComponent } from "../../sidenav/sidenav.component";
import { Component } from "@angular/core";

@Component({
  selector: 'hospital-edit-patient-profil',
  standalone: true,
  imports: [
    RouterLink,
    SidenavComponent,
    NavbarComponent,
    HighchartsChartModule,
  ],
  templateUrl: './add-patient-profil.component.html',
  styleUrls: ['./add-patient-profil.component.scss']
})
export class AddPatientProfilComponent {

}
