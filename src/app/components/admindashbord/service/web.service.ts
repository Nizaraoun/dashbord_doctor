import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Doctor } from '../interface/doctor';
import { ReportDTO } from '../interface/report';

@Injectable({
  providedIn: 'root'
})
export class WebService {
    constructor(private http: HttpClient) {}

    private doctorSubject = new BehaviorSubject<Doctor[]>([]);
    doctors$ = this.doctorSubject.asObservable();
    
      setdoctors(doctors: Doctor[]) {
        this.doctorSubject.next(doctors);
      }
   
private url = 'http://localhost:8080/admin/';
private url2 = 'http://localhost:8080/report/';
    getAllDoctor(): Observable<Doctor[]> {
        return this.http.get<any>(this.url+"get-all-doctors",  { });
      }
      getNewDoctor(): Observable<Doctor[]> {
        return this.http.get<any>(this.url+'get-new-doctor?id=',  { });
      }
      desapprouverdoctor(id :string ) {
        return this.http.get<any>(this.url+'desapprouver-doctor?id='+id,  { });
      }
      approuverdoctor(id :string) {
        return this.http.get<any>(this.url+'approuver-doctor?id='+id,  { });
      }
getReport(): Observable<ReportDTO[]> {
  return this.http.get<any>(this.url2+'get-all-reports',  {
    
  });
  
}
// replayReport(id: number, replay: string): Observable<any> {
//  const body = {id: id, response: replay};
//   return this.http.post<any>(this.url2+'responce-report',body,  {
//     responseType
      
//     }); 
// }
replayReport(id: number, replay: string): Observable<string> {

  const body = {id: id, response: replay};
  return this.http.post<string>(this.url2+'responce-report',body, {  })
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error); // Forward error to the caller
      })
    );
}
}

