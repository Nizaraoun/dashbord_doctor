import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from "highcharts-angular";
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { RouterLink } from "@angular/router";
import { SidenavComponent } from "../../../components/sidenav/sidenav.component";

import timeGridPlugin from '@fullcalendar/timegrid';

@Component({
  selector: 'hospital-calendar',
  standalone: true,
  imports: [
    RouterLink,
    SidenavComponent,
    NavbarComponent,
    HighchartsChartModule,
    CommonModule
    
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  // calendarOptions: CalendarOptions = {};
}
