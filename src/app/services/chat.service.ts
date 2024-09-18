import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {  appointmentDTO} from '../interfaces/appointmentDTO';
import { ChatDto } from '../interfaces/chatdto';
import { co } from '@fullcalendar/core/internal-common';

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  constructor(private http: HttpClient) {}

  GetAllSidChat(token: string): Observable<ChatDto[]> {

    // Set headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    // Make a GET request to the server
    return this.http.get<ChatDto[]>(`http://localhost:8080/api/Get_All_Message?role=doctor`, { headers: headers });
  }

  getMessages(token: string, chatId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,

      
    });

    const body = { conversationId: chatId };

    const url = `http://localhost:8080/api/Get_Message`;

    return this.http.post<any>(url, body, { headers: headers ,responseType : 'text' as 'json'});
  }
  // send message to server
  sendMessage(token: string, message: string, chatId: string): Observable<any> {
    const url = `http://localhost:8080/api/Send_Message`;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });

    const body = { message: message, conversationId: chatId };

    return this.http.post(url, body, { headers, responseType: 'text' }).pipe(
      map(response => {
        try {
          // Attempt to parse response as JSON
          return JSON.parse(response);
        } catch (e) {
          // If parsing fails, return the plain text response
          return response;
        }
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }
}
