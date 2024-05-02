import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable, throwError } from 'rxjs';
import { register } from '../interfaces/register';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080';


  constructor(private http: HttpClient) {}
  registerDoctor(userDetails: register): Observable<any> {
    return this.http.post(`${this.baseUrl}/registerdoctor`, userDetails, { responseType: 'text' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error); // Forward error to the caller
        })
      );
  }


  getUserByEmail(postData: User): Observable<User[]> {
    const url = `${this.baseUrl}/login`;
    return this.http.post<User[]>(url, postData);
  }
}
  


