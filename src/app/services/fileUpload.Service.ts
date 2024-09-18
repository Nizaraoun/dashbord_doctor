import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private baseUrl = 'http://localhost:8080/api';  // Adjust this URL according to your backend setup

  constructor(private http: HttpClient) { }

  upload(file: File, documentName: string, token: string): Observable<HttpEvent<any>> {
    
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('document_name', documentName);
    formData.append('role', "doctor");  

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      headers: headers,
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }
}
