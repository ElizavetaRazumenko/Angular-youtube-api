import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isAuthUser: BehaviorSubject<boolean> = new BehaviorSubject(
    !!localStorage.getItem('authToken')
  );

  private buttonLogTextContent: BehaviorSubject<string> = new BehaviorSubject(
    localStorage.getItem('authToken') ? 'Logout' : 'Login'
  );

  public isAuntUser$: Observable<boolean> = this.isAuthUser.asObservable();
  public buttonLogTextContent$: Observable<string> =
    this.buttonLogTextContent.asObservable();

  public UserIsAuth(): void {
    localStorage.setItem('authToken', '123456');
    this.isAuthUser.next(true);
    this.buttonLogTextContent.next('Logout');
  }

  public UserIsNotAuth(): void {
    localStorage.removeItem('authToken');
    this.isAuthUser.next(false);
    this.buttonLogTextContent.next('Login');
  }
}
