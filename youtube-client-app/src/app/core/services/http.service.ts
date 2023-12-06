import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface RegistrationParams {
  email: string;
  name: string;
  password: string;
}

interface LoginParams {
  email: string;
  password: string;
}

export interface RequestResponseData {
  email: {
    S: 'string';
  };
  name: {
    S: 'string';
  };
  uid: {
    S: 'string';
  };
  createdAt: {
    S: 'string';
  };
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly registerURL = 'registration';

  private readonly loginURL = 'login';

  private readonly profileURL = 'profile';

  private readonly logoutURL = 'logout';

  constructor(private http: HttpClient) {}

  public sendRegistrationRequest(userData: RegistrationParams) {
    return this.http.post(this.registerURL, userData, { observe: 'response' });
  }

  public sendLoginRequest(userData: LoginParams) {
    return this.http.post(this.loginURL, userData, { observe: 'response' });
  }

  public sendProfileRequest() {
    const headers = new HttpHeaders({
      'rs-uid': localStorage.getItem('uid') || '',
      'rs-email': localStorage.getItem('email') || '',
      Authorization: localStorage.getItem('token') || ''
    });
    return this.http.get(this.profileURL, { headers });
  }

  public sendChangeNameRequest(name: string) {
    const headers = new HttpHeaders({
      'rs-uid': localStorage.getItem('uid') || '',
      'rs-email': localStorage.getItem('email') || '',
      Authorization: localStorage.getItem('token') || ''
    });
    return this.http.put(
      this.profileURL,
      { name },
      {
        headers,
        observe: 'response'
      }
    );
  }

  public logoutRequest() {
    const headers = new HttpHeaders({
      'rs-uid': localStorage.getItem('uid') || '',
      'rs-email': localStorage.getItem('email') || '',
      Authorization: localStorage.getItem('token') || ''
    });
    return this.http.delete(this.logoutURL, { headers, observe: 'response' });
  }
}
