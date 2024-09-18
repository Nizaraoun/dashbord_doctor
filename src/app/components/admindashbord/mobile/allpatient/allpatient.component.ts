import { Component, OnInit } from '@angular/core';
import { WebService } from '../../service/web.service';
import { User } from '../../interface/user';
import { MobileService } from '../../service/mobile.service';
import { imgDoctorurl, imgUserurl } from 'src/app/components/constants/socketUrl';
import { NavbarComponent } from "../../navbar/navbar.component";
import { SidbarComponent } from "../../sidbar/sidbar.component";
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-allpatient',
    standalone: true,
    templateUrl: './allpatient.component.html',
    styleUrl: './allpatient.component.scss',
    imports: [NavbarComponent, SidbarComponent,
      HighchartsChartModule,
    CommonModule,
    FormsModule ,// Add FormsModule to imports array


    ]
})
export class AllpatientComponent implements OnInit {
  serch: string = '';
  constructor(
    private mobileService: MobileService,
) { }
patientdetails: User[] = [];
ngOnInit(): void {
    this.mobileService.users$.subscribe((data: User[]) => {
        this.patientdetails = data;
        for (let i = 0; i <this. patientdetails.length; i++) {
          if (this. patientdetails[i].image != "default.jpg") {
             this. patientdetails[i].image = imgUserurl + this. patientdetails[i].image;
            }
          else {
            this. patientdetails[i].image = 'assets/images/user/09.jpg'
               }
          }
      });
}
deleteUser(id: String) {
    
      this.patientdetails = this.patientdetails.filter((user) => user.id !== id);
    
  }
}
