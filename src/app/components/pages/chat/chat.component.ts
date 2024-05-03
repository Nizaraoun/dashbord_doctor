import { Component } from '@angular/core';
import { HighchartsChartModule } from "highcharts-angular";
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { RouterLink } from "@angular/router";
import { SidenavComponent } from "../../../components/sidenav/sidenav.component";

@Component({
  selector: 'hospital-chat',
  standalone: true,
  imports: [
    RouterLink,
    SidenavComponent,
    NavbarComponent,
    HighchartsChartModule,
  ],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  sentMessage: boolean = false;
  message: any;
  constructor() {}
  sendMessage() {
    console.log('sendMessage() called');
    this.sentMessage = true;
    //if sending fails then 
    setTimeout(() => {
      this.sentMessage = false;
    }, 3000); // Reset after 3 seconds
  }
}
