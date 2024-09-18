import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import { NavbarComponent } from '../../navbar/navbar.component';
import { SidenavComponent } from '../../sidenav/sidenav.component';
import { FileUploadService } from 'src/app/services/fileUpload.Service';
import { on } from 'events';
import { MessageService } from 'primeng/api';
import { doctorDto } from 'src/app/interfaces/doctorDto';

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
export class DoctorEditeProfileComponent  implements OnInit  {
  selectedFile: File | null = null;
  documentName: string = '';
  message: string = '';
  token: string = '';
  id: string = '';
  doctor: doctorDto = {
    id: '',
    username: '',
    speciality: '',
    email: '',
    phone: '',
    address: '',
    image: null,
    rating: 0,
    followers: 0,
  };

  constructor(private uploadService: FileUploadService,
    private msService: MessageService,

  ) { }


  ngOnInit(): void {
    this.doctor.id = localStorage.getItem('id')!;
    this.doctor.username = localStorage.getItem('username')!;
    this.doctor.speciality = localStorage.getItem('speciality')!;
    this.doctor.email = localStorage.getItem('email')!;
    this.doctor.phone = localStorage.getItem('phone')!;
    this.doctor.address = localStorage.getItem('address')!;
    this.doctor.image = localStorage.getItem('image')!;
    this.doctor.rating = Number(localStorage.getItem('rating'));
    this.doctor.followers = Number(localStorage.getItem('followers'));
    this.token = localStorage.getItem('token')!;
    this.id = localStorage.getItem('id')!;
    
    
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }
  upload(): void {
    if (this.selectedFile) {
      this.uploadService.upload(this.selectedFile, this.id ,this.token

      ).subscribe(
        (response :any) => {
console.log(response);
          this.msService.add({ severity: 'success', summary: 'Success', detail: 'File Uploaded Successfully!'});
          localStorage.setItem('image', this.id+"/"+this.selectedFile!.name);

        },
        err => {
          this.message = 'Could not upload the file!';
        }
      );
    } else {
      this.message = 'Please select a file and enter a document name!';
    }
  }
}
