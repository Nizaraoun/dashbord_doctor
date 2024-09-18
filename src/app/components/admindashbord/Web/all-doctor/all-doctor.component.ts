import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { SidbarComponent } from "../../sidbar/sidbar.component";
import { CommonModule } from '@angular/common';
import { WebService } from '../../service/web.service';
import { Doctor } from '../../interface/doctor';
import { imgDoctorurl } from 'src/app/components/constants/socketUrl';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'web-all-doctor',
    standalone: true,
    templateUrl: './all-doctor.component.html',
    styleUrl: './all-doctor.component.scss',
    imports: [NavbarComponent, SidbarComponent,      
          CommonModule,
          FormsModule ,// Add FormsModule to imports array

    ]

})
export class AllDoctorComponent implements OnInit{
    serch: string = '';
constructor(
    private webService: WebService,
) { }
doctors: Doctor[] = [];
ngOnInit(): void {
    this.webService.doctors$.subscribe((data: Doctor[]) => {

        
        this.doctors = data;
        for (let i = 0; i <this. doctors.length; i++) {
            this. doctors[i].image = imgDoctorurl + data[i].image;
        }
      });
   
}

    stars(rating: number): number[] {
        return Array(5).fill(0).map((_, i) => i < rating ? 1 : 0);
      }
    

}
