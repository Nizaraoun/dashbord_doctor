import { AppService } from '../service/app.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component ,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import { SidenavComponent } from '../../sidenav/sidenav.component';

@Component({
  selector: 'admin-navbar',
  standalone: true,
  imports: [
    CommonModule,
    NgbModule,
    HighchartsChartModule,
    RouterLink
]
,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  constructor(private appService: AppService) { }
  isCollapsed = true;
  ngOnInit() {
  }

  toggleSidebarPin() {
    this.appService.toggleSidebarPin();
  }
  toggleSidebar() {
    this.appService.toggleSidebar();
  }

}
