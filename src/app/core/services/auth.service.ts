import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {take, tap} from 'rxjs/operators';
import {LoginPayload, LoginResponse, RegisterPayload, RegisterResponse} from '../models/auth';

@Injectable({providedIn: 'root'})
export class AuthService {
  token$ = of(localStorage.getItem('token'));

  constructor(private http: HttpClient) {
  }


  login(payload: LoginPayload): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('http://192.168.119.148:8000/api/login', payload).pipe(tap(data => {
      localStorage.setItem('token', data.token);
    }));
  }

  register(form: RegisterPayload): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>('http://192.168.119.148:8000/api/register', form);
  }
}
