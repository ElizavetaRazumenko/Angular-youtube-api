import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { HttpService } from '../../services/http.service';

interface InfoNotify {
  message: string;
  isSuccess: boolean;
  id: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public currentURl = '';

  public isUserAuth$ = this.authService.isUserAuth$;

  public notifyArray: InfoNotify[] = [];
  public isLogoutButtonClicked = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.currentURl = event.url;
      }
    });
  }

  public goToTheMain() {
    this.router.navigate(['/']);
  }

  public goToTheProfile() {
    this.router.navigate(['/profile']);
  }

  public Logout() {
    if (!this.isLogoutButtonClicked) {
      this.isLogoutButtonClicked = true;
      this.httpService.logoutRequest().subscribe({
        next: () => {
          this.authService.userLogout();

          localStorage.removeItem('token');
          localStorage.removeItem('uid');
          localStorage.removeItem('email');

          this.notifyArray.push({
            message: 'User has successfully logged out',
            isSuccess: true,
            id: window.crypto.randomUUID()
          });

          setTimeout(() => {
            this.router.navigate(['/signin']);
            this.isLogoutButtonClicked = false;
          }, 2000);
        },
        error: () => {
          this.notifyArray.push({
            message: 'Unsuccessful! Please try again',
            isSuccess: false,
            id: window.crypto.randomUUID()
          });

          this.isLogoutButtonClicked = false;
        }
      });
    }
  }

  public deleteNotify(id: string) {
    this.notifyArray = this.notifyArray.filter((notify) => notify.id !== id);
  }
}
