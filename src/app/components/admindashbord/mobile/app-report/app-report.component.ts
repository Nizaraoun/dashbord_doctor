import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { SidbarComponent } from "../../sidbar/sidbar.component";
import { CommonModule } from '@angular/common';
import { ReportDTO } from '../../interface/report';
import { WebService } from '../../service/web.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-app-report',
    standalone: true,
    templateUrl: './app-report.component.html',
    styleUrl: './app-report.component.scss',
    imports: [NavbarComponent,
       SidbarComponent,
       CommonModule,
       FormsModule
    ]
})

export class AppReportComponent implements OnInit{
    isModalVisible: boolean = false;
    Reports: ReportDTO[] = [];
    replyText: string = '';
    id: number = 0;

    openReplyModal(id :number): void {
      this.isModalVisible = true;
      this.id = id;
    }
  
    closeAndReply(): void {
      console.log(this.replyText);
      this.webService.replayReport(this.id,this.replyText).subscribe((data: string) => {
      });
      this.isModalVisible = false;

    }
  
    close(): void {
        this.isModalVisible = false;
    }  
    constructor(
        private webService: WebService,
      ) { }
      ngOnInit(): void {
        this.webService.getReport().subscribe((data: ReportDTO[]) => {
          this.Reports = data;
          for (let index = 0; index < this.Reports.length; index++) {
            if (this.Reports[index].role == "patient") {
              this.Reports[index].senderimage = 'assets/images/user/userimage.png';
              
            }
            else {
              this.Reports[index].senderimage = 'assets/images/user/10.jpg';
            }
          }
        });
    
}
}