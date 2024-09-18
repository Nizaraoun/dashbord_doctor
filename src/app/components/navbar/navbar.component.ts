import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { co } from '@fullcalendar/core/internal-common';
import { Router } from '@angular/router';
import { baseUrl, imgDoctorurl } from '../constants/socketUrl';



@Component({
  selector: 'hospital-navbar',
  standalone: true,
  imports: [RouterLink ],
  
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  username: string = '';
  base64Image: string = '';
  decodedImage: string = '';
  constructor(
    private router: Router,

  ) { }
  ngOnInit(): void {
    this.username = localStorage.getItem('username') || '';
    this.base64Image = localStorage.getItem('image') || '';
    this.decodedImage = imgDoctorurl + this.base64Image;
  }

  logout(): void{
    this.router.navigate(['/login']); // Navigate before reloading
    localStorage.clear();
    console.log('logout');
  }

  // goToProfile(): void{
  //   console.log('go to profile');
  //   this.router.navigate(['/MyProfile']);

  // }

}
