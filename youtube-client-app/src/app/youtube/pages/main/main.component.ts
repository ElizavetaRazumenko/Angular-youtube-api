/* eslint-disable class-methods-use-this */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/auth/services/login.service';
import { AdminCard } from 'src/app/redux/models/admin.models';
import { MainCard } from 'src/app/redux/models/main.models';
import { selectAdminCard } from 'src/app/redux/selectors/admin.selectors';
import { selectMainCard } from 'src/app/redux/selectors/main.selectors';

import { MainPageService } from '../../services/main-page/main-page.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private isAuntUser$ = this.loginService.isAuntUser$;
  public isAuntUser!: boolean;
  public isRequestSend$ = this.mainPageService.isRequestSend$;
  private isSortingDataTurn$ = this.mainPageService.isSortingDataTurn$;
  public isSortingDataTurn!: boolean;
  private isSortDataFromLargestToSmallest$ =
    this.mainPageService.isSortDataFromLargestToSmallest$;
  public isSortDataFromLargestToSmallest!: boolean;
  private isSortingViewsTurn$ = this.mainPageService.isSortingViewsTurn$;
  public isSortingViewsTurn!: boolean;
  private isSortViewsFromLargestToSmallest$ =
    this.mainPageService.isSortViewsFromLargestToSmallest$;
  public isSortViewsFromLargestToSmallest!: boolean;
  private filterInputValue$ = this.mainPageService.filterInputValue$;
  public filterInputValue!: string;
  public videos$: Observable<MainCard[]> = this.store.select(selectMainCard);
  public cards$: Observable<AdminCard[]> = this.store.select(selectAdminCard);

  constructor(
    private readonly store: Store,
    private mainPageService: MainPageService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isAuntUser$.subscribe((value) => {
      this.isAuntUser = value;
    });

    if (!this.isAuntUser) this.router.navigate(['/login']);
    this.isSortingDataTurn$.subscribe((value) => {
      this.isSortingDataTurn = value;
    });

    this.isSortDataFromLargestToSmallest$.subscribe((value) => {
      this.isSortDataFromLargestToSmallest = value;
    });

    this.isSortingViewsTurn$.subscribe((value) => {
      this.isSortingViewsTurn = value;
    });

    this.isSortViewsFromLargestToSmallest$.subscribe((value) => {
      this.isSortViewsFromLargestToSmallest = value;
    });

    this.filterInputValue$.subscribe((value) => {
      this.filterInputValue = value;
    });
  }
}
