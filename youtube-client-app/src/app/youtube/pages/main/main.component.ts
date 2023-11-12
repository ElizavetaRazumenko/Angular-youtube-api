/* eslint-disable class-methods-use-this */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/auth/services/login.service';
import { SearchFormService } from 'src/app/core/services/search-form.service';
import VideoItems from 'src/app/search-responce/search-response.model';

import { MainPageService } from '../../services/main-page/main-page.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public isAuntUser$ = this.loginService.isAuntUser$;
  public isAuntUser!: boolean;
  public isRequestSend = true;
  public videos$: Observable<VideoItems> = this.searchFormService.videos$;
  constructor(
    private searchFormService: SearchFormService,
    public mainPageService: MainPageService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isAuntUser$.subscribe((value) => {
      this.isAuntUser = value;
    });
    if (!this.isAuntUser) this.router.navigate(['/login']);
  }
}
