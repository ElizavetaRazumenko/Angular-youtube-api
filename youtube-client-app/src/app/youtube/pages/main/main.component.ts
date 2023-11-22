/* eslint-disable @ngrx/avoid-dispatching-multiple-actions-sequentially */
/* eslint-disable class-methods-use-this */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/auth/services/login.service';
import {
  mainClearCardsAction,
  mainSearchOnPageAction
} from 'src/app/redux/actions/main.actions';
import { paginationChangePageAction } from 'src/app/redux/actions/pagination.actions';
import { AdminCard } from 'src/app/redux/models/admin.models';
import { MainCard } from 'src/app/redux/models/main.models';
import { PaginationInfo } from 'src/app/redux/models/pagination.models';
import { selectAdminCard } from 'src/app/redux/selectors/admin.selectors';
import { selectMainCard } from 'src/app/redux/selectors/main.selectors';
import { selectPaginationInfo } from 'src/app/redux/selectors/pagination.selectors';

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
  public pageInfo$: Observable<PaginationInfo> =
    this.store.select(selectPaginationInfo);

  public currentPage!: number;
  public prevToken = '';
  public nextToken = '';

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

    this.pageInfo$.subscribe((pageInfo) => {
      this.currentPage = pageInfo.page;
      this.prevToken = pageInfo.prevPageToken;
      this.nextToken = pageInfo.nextPageToken;
    });
  }

  public increasePage() {
    const query = localStorage.getItem('Query') || '';
    this.store.dispatch(
      paginationChangePageAction({ page: this.currentPage + 1 })
    );
    this.store.dispatch(mainClearCardsAction());
    this.store.dispatch(
      mainSearchOnPageAction({
        query,
        tokenName: 'nextPageToken',
        token: this.nextToken
      })
    );
  }
}
