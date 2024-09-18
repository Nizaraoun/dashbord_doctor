import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class subscribeService {
    private baseUrl = 'http://localhost:8080/api';  // Adjust this URL according to your backend setup
private PlanSubject = new BehaviorSubject<string>('');
plans$ = this.PlanSubject.asObservable();

    setPlans(plans: string) {
        this.PlanSubject.next(plans);
    }
    getplans(): Observable<string> {
        return this.plans$;
    
    }

  constructor(private http: HttpClient) {}

  addSubscribe(id: string, plan: string, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
  
    console.log('id', id);
    console.log('plan', plan);
    console.log('token', token);
  
    const url = `http://localhost:8080/api/add-subscription?id=${id}&plan=${plan}`;
  
    return this.http.post(url, {}, { headers: headers, responseType: 'text' as 'json' });
  }
}  