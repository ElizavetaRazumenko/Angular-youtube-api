import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errorMessage = '';

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  public submitForm(login: string, password: string) {
    if (!login || !password) {
      this.errorMessage = 'fields must be completed';
    } else {
      this.loginService.UserIsAuth();
      this.router.navigate(['']);
    }
  }

  public clearErrorMessage = () => {
    this.errorMessage = '';
  };
}
