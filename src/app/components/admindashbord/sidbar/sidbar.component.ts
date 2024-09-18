import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'admin-sidbar',
  standalone: true,
  imports: [
    CommonModule,
   RouterLink

  ],
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.scss']
})
export class SidbarComponent {
logout() {
    localStorage.removeItem('accessToken');
}
  isSubmenuOpen: boolean = false;

  toggleSubmenu() {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }
}
