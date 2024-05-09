import * as Highcharts from "highcharts";
import { Component, OnInit, inject } from "@angular/core";
import { HighchartsChartModule } from "highcharts-angular";
import { RouterLink } from "@angular/router";
import { SidenavComponent } from "../../../components/sidenav/sidenav.component";
import { SocketService } from "src/app/services/socket.service";
import { NavbarComponent } from "../../navbar/navbar.component";
import { PatientService } from "src/app/services/patient.service";
import{accessToken} from '../../constants/socketUrl';
import { appointmentDTO} from '../../../interfaces/appointmentDTO';
import { CommonModule } from "@angular/common";

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

  private socketService = inject(SocketService);
  chartPacientesPorGenero: typeof Highcharts = Highcharts;
  pacientesPorGeneroOptions!: Highcharts.Options;
  Token: string = '';
  Username :String = '';
  Rating: number = 0;

  constructor(
    private patient: PatientService,
  ) {

  }

  ngOnInit(): void {
    this.Token = localStorage.getItem('accessToken') || '';
    this.Username = localStorage.getItem('username') || '';
    this.Rating = Number(localStorage.getItem('rating')) || 0;

    // Assuming appointmentDTO is of type AppointmentDTO[]
  this.patient.getAllPatients( this.Token).subscribe((data: appointmentDTO[]) => {
    this.appointments = data;

  });


  }


}
