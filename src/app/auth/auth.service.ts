import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ResponsePayload {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}
  singUp(email: string, password: string) {
    return this.http.post<ResponsePayload>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAQvKdCDRzKTZrmiddlMtO4mLfY8kQDDgM',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
}
