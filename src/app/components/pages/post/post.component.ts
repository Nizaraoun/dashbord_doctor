import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import { NavbarComponent } from '../../navbar/navbar.component';
import { SidenavComponent } from '../../sidenav/sidenav.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';

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
  constructor(public dialog: MatDialog) {}
  adjustTextArea(event: any) {
    const textArea = event.target;
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';
  }

  copyLink() {
    // Implement copy link functionality
  }

  editPost() {
    // Implement edit post functionality
  }

  embedAdda() {
    // Implement embed adda functionality
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogContentExampleDialog {}