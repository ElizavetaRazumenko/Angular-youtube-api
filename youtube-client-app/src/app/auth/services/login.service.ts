import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { FAKE_AUTH_TOKEN } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isAuthUser: BehaviorSubject<boolean> = new BehaviorSubject(
    !!localStorage.getItem('authToken')
  );

  public buttonLogTextContent: BehaviorSubject<string> = new BehaviorSubject(
    localStorage.getItem('authToken') ? 'Logout' : 'Login'
  );

  public isAuntUser$: Observable<boolean> = this.isAuthUser.asObservable();
  public buttonLogTextContent$: Observable<string> =
    this.buttonLogTextContent.asObservable();

  public UserIsAuth(): void {
    localStorage.setItem('authToken', FAKE_AUTH_TOKEN);
    this.isAuthUser.next(true);
    this.buttonLogTextContent.next('Logout');
  }

  public UserIsNotAuth(): void {
    localStorage.removeItem('authToken');
    this.isAuthUser.next(false);
    this.buttonLogTextContent.next('Login');
  }
}
