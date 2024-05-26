import { HighchartsChartModule } from "highcharts-angular";
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { SidenavComponent } from "../../../components/sidenav/sidenav.component";
import { Username } from '../../constants/socketUrl';
import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";

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
export class DoctorProfileComponent implements OnInit{
  Username: string = '';
  speciality: string = '';
  phone: string = '';
  base64Image: string = '';
  email: string = '';
  Birthday: string = '';
  decodedImage: string = '';
  constructor() { }

  ngOnInit(): void {
    this.Username = localStorage.getItem('username') || '';
    this.speciality = localStorage.getItem('speciality') || '';
    this.phone = localStorage.getItem('phone') || '';
    this.email = localStorage.getItem('email') || '';
    this.base64Image = localStorage.getItem('image') || '';
    this.decodedImage = 'data:image/png;base64,' + atob(this.base64Image);

    // this.Birthday = localStorage.getItem('birthday') || '';


  }


}
