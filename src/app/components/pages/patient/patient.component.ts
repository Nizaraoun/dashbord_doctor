import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import { NavbarComponent } from '../../navbar/navbar.component';
import { SidenavComponent } from '../../sidenav/sidenav.component';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
import { patientDTO } from 'src/app/interfaces/patientDTO';

interface Bookmark {
  img: string;
  category: string;
  name: string;
  address: string;
}

@Component({
    standalone: true,
  selector: 'hospital-patient-profil',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
  imports: [
    RouterLink,
    SidenavComponent,
    NavbarComponent,
    HighchartsChartModule,
    CommonModule,]
})
export class PatientComponent implements OnInit {
  bookmarks: Bookmark[] = [
    { img: 'assets/images/user/10.jpg', category: 'Primary care - Internist', name: 'Dr. Julia Jhones', address: '2726 Shinn Street, New York' },
    { img: 'assets/images/user/10.jpg', category: 'Primary care - Internist', name: 'Dr. Mark Schumaker', address: '2726 Shinn Street, New York' },
    { img: 'assets/images/user/10.jpg', category: 'Primary care - Internist', name: 'Dr. Lucas George', address: '2726 Shinn Street, New York' }
  ];
  orderBy: string = 'any';
  currentPage: number = 1;
  totalPages: number = 3;
  pages: number[] = [1, 2, 3];
  Token: string = '';
  id: string = '';
  userdetails:patientDTO[] = [];


  constructor(private patient: PatientService,    private router: Router,
  ) {}

  ngOnInit(): void {
    this.Token = localStorage.getItem('accessToken') || '';
    this.id = localStorage.getItem('id') || '';
    this.patient.getAllPatient(this.Token,this. id).subscribe((data : patientDTO[]) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].image != null){
          data[i].image = 'data:image/png;base64,' +data[i].image;

        }
        else
        data[i].image = 'assets/images/user/10.jpg'

      }
      this.userdetails = data;
    } , (error) => {
      this.router.navigate(['/401']);

    });

    
  }

  sortBookmarks(): void {
    if (this.orderBy === 'latest') {
      this.bookmarks.sort((a, b) => b.name.localeCompare(a.name));
    } else if (this.orderBy === 'oldest') {
      this.bookmarks.sort((a, b) => a.name.localeCompare(b.name));
    }
  }

  removeBookmark(bookmark: Bookmark): void {
    this.bookmarks = this.bookmarks.filter(b => b !== bookmark);
  }

  changePage(page: number): void {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
      // logic to change the displayed bookmarks
    }
  }
}
