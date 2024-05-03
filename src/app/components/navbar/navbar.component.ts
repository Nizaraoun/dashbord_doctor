import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'hospital-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
Username: String = '';
  constructor() {}
  
    Oninit() {
       const Username = localStorage.getItem('username');

    }

}
