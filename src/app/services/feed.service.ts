import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {  appointmentDTO} from '../interfaces/appointmentDTO';
import { Feed } from '../interfaces/feed';

@Injectable({
  providedIn: 'root'
})
export class FeedService {


  constructor(private http: HttpClient) {
    
  }
  private PostSubject = new BehaviorSubject<Feed[]>([]);
Post$ = this.PostSubject.asObservable();

  setPost(post: Feed[]) {
    this.PostSubject.next( post);
  }
  GetPub(token: string): Observable<Feed[]> {
    const url = `http://localhost:8080/api/get-all-posts?role=user`;

    // Set headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    console.log(token);
    // Make a GET request to the server
    return this.http.get<Feed[]>(url,  { headers: headers ,  });
  }
  AddPost(post: Feed, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    const url = `http://localhost:8080/api/add-post`;
    return this.http.post(url, post, { headers: headers, responseType: 'text' as 'json' });
  }
}
