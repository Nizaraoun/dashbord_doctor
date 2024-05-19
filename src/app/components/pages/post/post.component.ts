import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import { NavbarComponent } from '../../navbar/navbar.component';
import { SidenavComponent } from '../../sidenav/sidenav.component';

@Component({
  selector: 'hospital-post',
  standalone: true,
  templateUrl: './post.component.html',
  styleUrls: ["./post.component.scss"], // Change styleUrl to styleUrls
  imports: [
    RouterLink,
    SidenavComponent,
    NavbarComponent,
    HighchartsChartModule,
    CommonModule, // Import CommonModule here

]
})
export class PostComponent {

  copyLink() {
    // Implement copy link functionality
  }

  editPost() {
    // Implement edit post functionality
  }

  embedAdda() {
    // Implement embed adda functionality
  }
}
