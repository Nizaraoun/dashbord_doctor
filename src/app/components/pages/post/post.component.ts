import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import { NavbarComponent } from '../../navbar/navbar.component';
import { SidenavComponent } from '../../sidenav/sidenav.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';  
import { Component } from '@angular/core';
import { Feed } from 'src/app/interfaces/feed';
import { FeedService } from 'src/app/services/feed.service';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { co } from '@fullcalendar/core/internal-common';
import { MessageService } from 'primeng/api';

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
    MatListModule,
     MatDividerModule,
     FormsModule  // <-- Add FormsModule to the imports array


]
})
export class PostComponent {

  token: string | null = '';
  feed: Feed[] = [];
  addfeed: Feed;
  newComment: string;
  id: string = '';
  postContent: string = ''; // Bound to the textarea
  submittedPost: string | null = null; // To store the submitted post

  ngOnInit(): void {
    console.log('ngOnInit');
    this. token = localStorage.getItem('accessToken');
    this.id = localStorage.getItem('id') || '';


    this.feedService.Post$.subscribe((data: Feed[]) => {
      this.feed = data;
    });
  }
  addPost() {
    this.addfeed = {  
      postId: this.feed.length+1,
      content: this.postContent,
      userId: this.id,
      commentContent:"",
      commentId:"",
      anonymous:null,
      createdAt:null,
      role:"doctor",
      senderImg:null,
      commentCount:null,
      senderName:null,
    };
    console.log(this.postContent);
    this.feedService.AddPost(this.addfeed ,this.token!).subscribe((data: Feed[]) => {
      this.feed = data;
      this.postContent = '';
      this.msgService.add({ severity: 'success', summary: 'Success', detail: 'Post added successfully' });
    }
    );
  }


  constructor(public dialog: MatDialog
    ,private       feedService: FeedService,
    private msgService: MessageService


  ) {}
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
  templateUrl: 'dialog-content-example-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogContentExampleDialog {}
