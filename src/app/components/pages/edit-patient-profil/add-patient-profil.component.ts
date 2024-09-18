import { HighchartsChartModule } from "highcharts-angular";
import { NavbarComponent } from "../../navbar/navbar.component";
import { Router, RouterLink } from "@angular/router";
import { SidenavComponent } from "../../sidenav/sidenav.component";
import { Component, OnInit } from "@angular/core";
import { co } from "@fullcalendar/core/internal-common";
import { CommonModule } from "@angular/common";
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { PatientService } from "src/app/services/patient.service";
import { patientDTO } from "src/app/interfaces/patientDTO";
import { MessageService } from "primeng/api";

@Component({
  selector: 'hospital-edit-patient-profil',
  standalone: true,
  imports: [
    RouterLink,
    SidenavComponent,
    NavbarComponent,
    HighchartsChartModule,
    FormsModule ,// Add FormsModule to imports array
    CommonModule, // Import CommonModule here


   
  ],
  templateUrl: './add-patient-profil.component.html',
  styleUrls: ['./add-patient-profil.component.scss']
})
export class AddPatientProfilComponent  implements OnInit{
  ngOnInit(): void {
this.token = localStorage.getItem('accessToken') || '';    
  }

  constructor(  
    private patientService :PatientService,
    private messageService: MessageService,
    private router: Router,
   ) { }
   token :string = '';

  profile = {
    username: '',
    phone: '',
    cin: '',
    email: '',
    password: ''
  };

  onSubmit() {
   this. patientService.addPatient(this.profile  ,this.token

   ).subscribe((data) => {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Patient added successfully' });
              this.router.navigate(['/dashboard-home']);

    }
    );
  }
}
