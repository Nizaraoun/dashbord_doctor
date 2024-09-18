import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import { NavbarComponent } from '../../navbar/navbar.component';
import { SidenavComponent } from '../../sidenav/sidenav.component';
import { appointmentDTO } from 'src/app/interfaces/appointmentDTO';
import { AppointmentService } from 'src/app/services/appointment.service';
import { co, s } from '@fullcalendar/core/internal-common';
interface Booking {
    img: string;
    name: string;
    date: string;
    time: string;
    telephone: string;
    email: string;
}

@Component({
    selector: 'hospital-bookings-list',
    templateUrl: './bookings-list.component.html',
    styleUrls: ['./bookings-list.component.scss'],
    standalone: true,
    imports: [   
        RouterLink,
        SidenavComponent,
        NavbarComponent,
        HighchartsChartModule,
        CommonModule,]
})
export class bookingslistComponent implements OnInit {
    appointments: appointmentDTO[] = [];
    currentPage: number = 1;
    itemsPerPage: number = 3;
    totalPages: number = 0;
    token = localStorage.getItem('accessToken');
    constructor(private appointmentService: AppointmentService,
        


    )
    
    { 

    }
    ngOnInit(): void {
        console.log('ngOnInit');
        this. token = localStorage.getItem('accessToken');

        this.appointmentService.appointments$.subscribe((data: appointmentDTO[]) => {
          this.appointments = data;
        });
      }
      completeAppointment (appointmentId:number) :void {
        this.appointmentService.completeAppointment(appointmentId,this.token!).subscribe((data) => {
            this.appointments=this.appointments.filter((appointment) => appointment.id !== appointmentId);
        });
      }


    //   get paginatedAppointments(): appointmentDTO[] {
    //     const start = (this.currentPage - 1) * this.itemsPerPage;
    //     const end = start + this.itemsPerPage;
    //     return this.appointments.slice(start, end);
    //   }
    
    //   goToPage(page: number): void {
    //     if (page >= 1 && page <= this.totalPages) {
    //       this.currentPage = page;
    //     }
    //   }
    
    //   previousPage(): void {
    //     if (this.currentPage > 1) {
    //       this.currentPage--;
    //     }
    //   }
    
    //   nextPage(): void {
    //     if (this.currentPage < this.totalPages) {
    //       this.currentPage++;
    //     }
    //   }
    
}
