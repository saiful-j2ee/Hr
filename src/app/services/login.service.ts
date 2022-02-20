
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
   headers = {'content-Type': 'application/json' };

  login(data: any): Observable<any>{
    return this.http.post<any>('http://localhost:8080/login', data);
  }

  employeeLogin(data: any): Observable<any>{
    return this.http.post<any>('http://localhost:8080/employeelogin', JSON.stringify(data), {headers: this.headers});
  }

  employee(data: any): Observable<any>{
    return this.http.post<any>('http://localhost:8080/salary', JSON.stringify(data), {headers: this.headers});
  }
}
