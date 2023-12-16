// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { etudiant } from '../model/etudiant';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8088'; // Replace with your actual API URL
  private jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(private http: HttpClient) { }

  login(student: etudiant): Observable<any> {
    
    // Assuming your backend expects an object with email and password properties
    const loginData = { email: student.email, password: student.password };

    return this.http.post(`${this.apiUrl}/Login`, loginData);
  }
  isLoggedIn(): any {
    const storedToken = localStorage.getItem('token');
    return storedToken && storedToken.trim() !== '';
  }
  logout(): void {
    localStorage.removeItem('token');
  }
  decodeToken(): any {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        return this.jwtHelper.decodeToken(token);
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }

    return null;
  }
}
