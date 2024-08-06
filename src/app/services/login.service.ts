import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  private apiUrl = 'https://your-server-url/api/Login'; // Replace with your server URL

  constructor(private http: HttpClient) {}

  LoginUser(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }
}
