// src/app/services/appointment.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { appointmentDTO } from '../interfaces/appointmentDTO';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/auth';
import { Token } from '@angular/compiler';
import { co } from '@fullcalendar/core/internal-common';
import { data } from 'autoprefixer';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
    constructor(private http: HttpClient) {}
  private appointmentsSubject = new BehaviorSubject<appointmentDTO[]>([]);
appointments$ = this.appointmentsSubject.asObservable();

  setAppointments(appointments: appointmentDTO[]) {
    this.appointmentsSubject.next(appointments);
  }

  public completeAppointment(id: number , token :string) :Observable<any> {
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
      });
      console.log(token);
      console.log(id);
      const body = { id:id };


      return this.http.post('http://localhost:8080/api/completeReservation', body, { headers, responseType: 'text' })
  }
public updateAppointments(token: string ,appointmentDTO :appointmentDTO): Observable<any> {
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
      });
    const body = { 
      id : appointmentDTO.id,
      jour : appointmentDTO.jour,
      heure : appointmentDTO.heure,
     };

    return  this.http.post('http://localhost:8080/api/updateReservation',body, { headers,responseType: 'text' });
    }
}
