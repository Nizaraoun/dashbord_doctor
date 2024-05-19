import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {  appointmentDTO} from '../interfaces/appointmentDTO';
import { Feed } from '../interfaces/feed';
import { doctorDto } from '../interfaces/doctorDto';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {


  constructor(private http: HttpClient) {}

  findDoctorBySpecialty(Token: string, speciality :string): Observable<doctorDto[]> {
    console.log(speciality);
    const url = `http://localhost:8080/api/get_doctor_By_Speciality?speciality=${speciality}`;
 
    // Set headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token}`,
    });
    // Make a GET request to the server
    return this.http.get<doctorDto[]>(url,  { headers: headers ,  });
  }
}
