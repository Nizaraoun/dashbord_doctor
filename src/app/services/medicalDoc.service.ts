import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MedicalDocumentService {  
    constructor() {}

    getMedicalDocument(secretKey: string, userId: string, token: string): Observable<any> {
        const headers = {
          'Authorization': `Bearer ${token}`,
        };
        const filedto = { 
          secretKey: secretKey,
          userId: userId,
          role: 'doctor'
        };

        // Convert the Axios Promise to an Observable using `from`
        const axiosRequest = axios.get('http://localhost:8080/api/get-medical-file', {
          headers: headers,
          data: filedto
        });

        return from(axiosRequest.then(response => response.data));
    }
}
