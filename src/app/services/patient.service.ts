import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {  appointmentDTO} from '../interfaces/appointmentDTO';

@Injectable({
  providedIn: 'root'
})
export class PatientService {


  constructor(private http: HttpClient) {}

  getAllPatients(token: string): Observable<appointmentDTO[]> {

    // Set headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    // Make a GET request to the server
    return this.http.get<appointmentDTO[]>(`http://localhost:8080/api/getAllReservationsForDashboard`, { headers: headers });
  }
  
}
