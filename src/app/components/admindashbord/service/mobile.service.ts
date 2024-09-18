// src/app/services/appointment.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  private baseUrl = 'http://localhost:8080';  // Your Spring Boot backend URL

    constructor(private http: HttpClient) {}
    private UserSubject = new BehaviorSubject<User[]>([]);
    users$ = this.UserSubject.asObservable();
    
      setUsers(users: User[]) {
        this.UserSubject.next(users);
      }
    private url = 'http://localhost:8080/admin/get-all-users';
    getAllPatient(): Observable<User[]> {
        return this.http.get<any>(this.url,);
      }


      deleteUser(id: String): Observable<any> {
        
        return this.http.get(`${this.baseUrl}/admin/delete-user?id=${id}`);
      }
    
    
}