import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isFilterVisible = false;
  public isAuntUser$ = this.loginService.isAuntUser$;
  public isAuntUser!: boolean;
  public buttonLogTextContent$ = this.loginService.buttonLogTextContent$;
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isAuntUser$.subscribe((value) => {
      this.isAuntUser = value;
    });
  }

  public changeFilterVisability() {
    this.isFilterVisible = !this.isFilterVisible;
  }

  public loginAutorization() {
    if (this.isAuntUser) {
      this.loginService.UserIsNotAuth();
      this.router.navigate(['/login']);
    }
  }
}
