import { Component, OnInit } from '@angular/core';
import { HighchartsChartModule } from "highcharts-angular";
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { Router, RouterLink } from "@angular/router";
import { SidenavComponent } from "../../../components/sidenav/sidenav.component";
import { ChatDto } from 'src/app/interfaces/chatdto';
import { ChatService } from 'src/app/services/chat.service';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { MessageGroup } from 'src/app/interfaces/messagegroup';
import { AblyService } from 'src/app/services/Ably.Service';
import { Validators ,FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { imgDoctorurl, imgUserurl } from '../../constants/socketUrl';

@Component({
  selector: 'hospital-chat',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    SidenavComponent,
    NavbarComponent,
    HighchartsChartModule,
    CommonModule // Add CommonModule to imports
  ],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  MsgForm = this.fb.group({
    message: ['', Validators.required],
    
  });
   

   Messagegrp: MessageGroup[] = [];
  Messages: ChatDto[] = [];
  sentMessage: boolean = false;
  doctorId: string = '';
  chatId: string = '';
  ablyId: string = '';
  ablyId2: string = '';
  userId: string = '';

  constructor(
    private fb: FormBuilder,

    private chatService: ChatService, // Correct the service name here
    private ablyService :AblyService
  ) { 
    this.ablyService.subscribeToChannel((message) => {
      if (message.name === this.ablyId) {
        this.Messagegrp.push({ id: this.doctorId, messages: message.data.toString()});
      } else if (message.name === this.ablyId2) {
        this.Messagegrp.push({ id: this.userId, messages: message.data.toString() });
       }
    });


  }
  get message() {
    return this.MsgForm.controls['message'];
  }

  ngOnInit(): void {
    this.doctorId=localStorage.getItem('id')!;
    // add id to the messageMap
    // this.ablyService.subscribeToMessageUpdates("");

    this.chatService.GetAllSidChat(localStorage.getItem('accessToken')!).subscribe((data) => {

      for (let i = 0; i < data.length; i++) {
        let splitString = data[i].message.split(':');

        if (splitString.length > 1) {
          this. addMessage (splitString[0], splitString[1].trim())   ;      
          data[i].message = splitString[1].trim();
        }
        if (data[i].image !="default.jpg") {
          data[i].image = imgUserurl + data[i].image;
        }
        else {
          data[i].image = 'assets/images/user/10.jpg';
        }
      }
      this.Messages = data;
    });
  }
  //send message to server
  sendMessage(chatId:string): void {

    this.chatService.sendMessage(
      localStorage.getItem('accessToken')!,
      this.MsgForm.value.message!,
      chatId
    
    ).subscribe(
      (data: any) => {
        this.ablyService.publishMessage(this.MsgForm.value.message!,this.ablyId);
      
           this.MsgForm.reset();

     
    });
  }

  //Get the message from server
  getMessages(chatId:string , userId : string): void {
    this.chatId = chatId;
    this.ablyId = userId+this.doctorId ;
    this.userId = userId;
    this.ablyId2 = this.doctorId+userId;
    this.chatService.getMessages(
      localStorage.getItem('accessToken')!,
      chatId
      
    ).subscribe(
      (data: string) => {

       this.Messagegrp = parseMessages(data); 

     
    });
  }

  // Add the addMessage method to the ChatComponent class
  addMessage(id: string, message: string): void {
   this .Messagegrp.push({ id: id, messages: message });
}
}

function parseMessages( data: string): MessageGroup[] {
  // Implement the function here
const messageGroups: MessageGroup[] = [];

  try {
    const lines: string[] = data.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const parts = line.split('  :');
      if (parts.length === 2) {
        const id = parts[0];
        const message = parts[1];
        messageGroups.push({ id: id, messages: message });  

      }

    }

    
  } catch (error) {
    
  }
  return messageGroups;
  
}
