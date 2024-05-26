import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import { NavbarComponent } from '../../navbar/navbar.component';
import { SidenavComponent } from '../../sidenav/sidenav.component';

@Component({
  selector: 'hospital-doctor-edite-profile',
  standalone: true,
  imports: [
    RouterLink,
    SidenavComponent,
    NavbarComponent,
    HighchartsChartModule,
  ],
  templateUrl: './doctor-edite-profile.component.html',
  styleUrls: ['./doctor-edite-profile.component.scss']
})
export class DoctorEditeProfileComponent {

}
