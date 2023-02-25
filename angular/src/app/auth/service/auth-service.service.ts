import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { LoginResponse, SignupResponse, User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseURL = '';

  constructor(private httpClient: HttpClient) {
    this.baseURL = environment.server;
  }

  login(requestBody: {
    email: string;
    password: string;
  }): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(
      `${this.baseURL}/login`,
      requestBody,
      {
        withCredentials: true,
      }
    );
  }

  signUp(user:User): Observable<SignupResponse> {
    return this.httpClient
      .post<SignupResponse>(`${this.baseURL}/signup`, user);
  }
  logout(): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/logout`, {
      withCredentials: true,
      responseType: 'text',
    });
  }
}
