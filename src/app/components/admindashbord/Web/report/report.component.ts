import { Component, OnInit } from '@angular/core';
import { ReportDTO } from '../../interface/report';
import { WebService } from '../../service/web.service';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent implements OnInit{
  constructor(
    private webService: WebService,
  ) { }
  Report: ReportDTO[] = [];
  ngOnInit(): void {
    this.webService.getReport().subscribe((data: ReportDTO[]) => {
      this.Report = data;
    });

  }

}
