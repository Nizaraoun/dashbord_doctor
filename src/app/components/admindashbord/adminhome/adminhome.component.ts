import { Component, OnInit } from '@angular/core';
import { SidbarComponent } from "../sidbar/sidbar.component";
import { Chart } from 'chart.js';
import { MobileService } from '../service/mobile.service';
import { WebService } from '../service/web.service';
import { User } from '../interface/user';
import { Doctor } from '../interface/doctor';
import { chart } from 'highcharts';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import { NavbarComponent } from '../navbar/navbar.component';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'admin-adminhome',
    standalone: true,
    templateUrl: './adminhome.component.html',
    styleUrls: ['./adminhome.component.scss'],
    imports: [
        SidbarComponent,
        HighchartsChartModule,
        CommonModule,
        NavbarComponent,
        BaseChartDirective
    ]
})
export class AdminhomeComponent implements OnInit{
  patient: User[]=[];
  doctor: Doctor[]=[];

        
      constructor(
        private mobileService: MobileService,
        private webService: WebService
      ) { 
        
      }
      
    
      ngOnInit() {

    this.mobileService.getAllPatient().subscribe((data:User[]) => { 
      this.patient = data;
      this.mobileService.setUsers(data);
       }
  );
    this.webService.getAllDoctor().subscribe((data:Doctor[]) => {
      this.doctor = data;
      this.webService.setdoctors  (data);
    });
    
      }
}
