import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  private isAuntUser$ = this.loginService.isAuntUser$;
  private isAuntUser!: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isAuntUser$.subscribe((value) => {
      this.isAuntUser = value;
    });
  }

  public toMainPage() {
    if (!this.isAuntUser) {
      this.router.navigate(['/login']);
    } else this.router.navigate(['/']);
  }
}
