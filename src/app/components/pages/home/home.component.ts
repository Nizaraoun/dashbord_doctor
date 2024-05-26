import * as Highcharts from "highcharts";
import { HighchartsChartModule } from "highcharts-angular";
import { SidenavComponent } from "../../../components/sidenav/sidenav.component";
import { SocketService } from "src/app/services/socket.service";
import { NavbarComponent } from "../../navbar/navbar.component";
import { PatientService } from "src/app/services/patient.service";
import{accessToken} from '../../constants/socketUrl';
import {filterOptions} from '../../constants/specialty';
import { appointmentDTO} from '../../../interfaces/appointmentDTO';
import { CommonModule } from "@angular/common";
import { Feed } from "src/app/interfaces/feed";
import { FeedService } from "src/app/services/feed.service";
import { DoctorService } from "src/app/services/doctor.service";
import { doctorDto } from "src/app/interfaces/doctorDto";
import { A } from "@fullcalendar/core/internal-common";
import { AppointmentService } from "src/app/services/appointment.service";
import { Router, RouterLink } from "@angular/router";
import { Component, OnInit, inject } from "@angular/core";

@Component({
    selector: "hospital-home",
    standalone: true,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"], // Change styleUrl to styleUrls
    imports: [
        RouterLink,
        SidenavComponent,
        NavbarComponent,
        HighchartsChartModule,
        CommonModule, // Import CommonModule here

    ]
})
export class HomeComponent implements OnInit {


appointments: appointmentDTO[] = []; // Define the appointments property as an array of Appointment objects
feed: Feed[] = [];
doctor: doctorDto[] = [];

specilaityOptions = filterOptions;
  private socketService = inject(SocketService);
  chartPacientesPorGenero: typeof Highcharts = Highcharts;
  pacientesPorGeneroOptions!: Highcharts.Options;
  Token: string = '';
  Username :String = '';
  Rating: number = 0;
  followers: number = 0;
    imageprofile: string = '';

  constructor(
    private patient: PatientService,
    private FeedService: FeedService,
    private router: Router,
    private doctorservice: DoctorService,
    private appointmentService: AppointmentService
    ) {

  }
  navigateToAllPosts() {
    this.router.navigate(['/post']);

  }


  ngOnInit(): void {
    this.Token = localStorage.getItem('accessToken') || '';
    this.Username = localStorage.getItem('username') || '';
    this.Rating = Number(localStorage.getItem('rating')) || 0;
    this.imageprofile = 'data:image/png;base64,' + atob(localStorage.getItem('image') || '');

    this.followers = Number(localStorage.getItem('followers')) || 0;

    // Assuming appointmentDTO is of type AppointmentDTO[]
  this.patient.getAllPatients( this.Token).subscribe((data: appointmentDTO[]) => {
    this.appointments = data;
    this.appointmentService.setAppointments(data); // Set appointments in the service


  });

  this.FeedService.GetPub(this.Token).subscribe((data: Feed[]) => {
    for (let i = 0; i < data.length; i++) {
      data[i].senderImg = 'data:image/png;base64,' +data[i].senderImg;

      if (data[i].senderName === null) {
        data[i].senderName = "مجهول الهوية";
        data[i].senderImg = 'assets/images/user/10.jpg';
      }


  }     
  
   this.feed = data; 


  });}

// openPostDialog() {
//   const modalRef = this.modalService.open(PostDialogComponent, );
//   modalRef.result.then((result) => {
//     console.log('Modal closed with result:', result);
//   }, (reason) => {
//     console.log('Modal dismissed with reason:', reason);
//   });
// }

findDoctorBySpecialty(specialty: string ) {
  this.doctorservice.findDoctorBySpecialty(this.Token, specialty ).subscribe((data: doctorDto[]) => {
    for (let i = 0; i < data.length; i++) {
     data[i].image = 'data:image/png;base64,' + atob(data[i].image);
    }
    this.doctor = data;
  });
}


}