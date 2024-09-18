import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {  appointmentDTO} from '../interfaces/appointmentDTO';
import { patientDTO } from '../interfaces/patientDTO';
import { Profiler } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class PatientService {


  constructor(private http: HttpClient) {}
  private patientSubject = new BehaviorSubject<patientDTO>({} as patientDTO);
patients$ = this.patientSubject.asObservable();


  setPatient(patients: patientDTO ) {
    this.patientSubject.next(patients);
  }
  getAllPatientsReservation(token: string): Observable<appointmentDTO[]> {

    // Set headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    // Make a GET request to the server
    return this.http.get<appointmentDTO[]>(`http://localhost:8080/api/getAllReservationsForDashboard`, { headers: headers });
  }
  getAllPatient(token: string , doctorId : string): Observable<patientDTO[]> {

    // Set headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    // Make a GET request to the server
    return this.http.get<patientDTO[]>(`http://localhost:8080/api/get-patients?id=${doctorId}`, { headers: headers });
  }
  getMedicalDocment(secretKey: string, userId: string, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    const filedto = { secretKey: secretKey, userId: userId, role: 'doctor' };
  
    return this.http.post(`http://localhost:8080/api/get-medical-file`, filedto, { headers: headers });
  }
  addPatient(patient: any , token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    console.log('patient', patient);
    console.log('token', token);
    const url = `http://localhost:8080/api/add-patient`;
    return this.http.post(url, patient, { headers: headers, responseType: 'text' as 'json' });
  }
}
