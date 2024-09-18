import { HighchartsChartModule } from "highcharts-angular";
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { SidenavComponent } from "../../../components/sidenav/sidenav.component";
import { Component, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { patientDTO } from "src/app/interfaces/patientDTO";
import { PatientService } from "src/app/services/patient.service";
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { MessageService } from 'primeng/api';
import { CommonModule } from "@angular/common";
import { imgUserurl } from "../../constants/socketUrl";
import { co } from "@fullcalendar/core/internal-common";
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'hospital-patient-profile',
  standalone: true,
  imports: [
    RouterLink,
    SidenavComponent,
    NavbarComponent,
    HighchartsChartModule,
    FormsModule ,// Add FormsModule to imports array
    CommonModule, // Import CommonModule here


  ],


  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss']
})
export class PatientProfileComponent implements OnInit {
  userdetails:patientDTO = {} as patientDTO;
  secretKey: string = '';
  Token: string = '';
  filePaths: string[] = [];

constructor(
  private patient: PatientService,    private router: Router,
  private messageService: MessageService,
) { }

  ngOnInit(): void {
    this.Token = localStorage.getItem('accessToken') || '';


    this.patient.patients$.subscribe((data: patientDTO) => {
      this.userdetails = data;
    });  }
    onSubmit(): void {
      this.patient.getMedicalDocment(this.secretKey, this.userdetails.id , this.Token).subscribe((data) => {
        if(data.file != null){
       this.filePaths =this.splitFilePaths(data.file);
       console.log(this.filePaths);
for(let i = 0; i < this.filePaths.length; i++){
  
  this.filePaths[i] = imgUserurl + this.filePaths[i];
 

}
}
      else{
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Secret Key is incorrect'});
      }
      }
    );
    }

    splitFilePaths(filesString: string): string[] {
      return filesString.split(' ');
    }
      transform(value: any[]): any[] {
        return value.slice(0, -1);
      }
    
 
}
