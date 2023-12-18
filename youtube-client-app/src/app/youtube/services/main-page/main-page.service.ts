import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  private stateIsRequestSend: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );

  public isRequestSend$: Observable<boolean> =
    this.stateIsRequestSend.asObservable();

  private stateIsSortingDataTurn: BehaviorSubject<boolean> =
    new BehaviorSubject(false);

  public isSortingDataTurn$: Observable<boolean> =
    this.stateIsSortingDataTurn.asObservable();

  private stateIsSortDataFromLargestToSmallest: BehaviorSubject<boolean> =
    new BehaviorSubject(true);

  public isSortDataFromLargestToSmallest$: Observable<boolean> =
    this.stateIsSortDataFromLargestToSmallest.asObservable();

  private stateIsSortingViewsTurn: BehaviorSubject<boolean> =
    new BehaviorSubject(false);

  public isSortingViewsTurn$: Observable<boolean> =
    this.stateIsSortingViewsTurn.asObservable();

  private stateIsSortViewsFromLargestToSmallest: BehaviorSubject<boolean> =
    new BehaviorSubject(true);

  public isSortViewsFromLargestToSmallest$: Observable<boolean> =
    this.stateIsSortViewsFromLargestToSmallest.asObservable();

  private stateFilterInputValue: BehaviorSubject<string> = new BehaviorSubject(
    ''
  );

  public filterInputValue$: Observable<string> =
    this.stateFilterInputValue.asObservable();

  public turnOnTheSortingData() {
    this.stateIsSortingDataTurn.next(true);
    this.stateIsSortDataFromLargestToSmallest.next(
      !this.stateIsSortDataFromLargestToSmallest.value
    );
    this.stateIsSortingViewsTurn.next(false);
  }

  public turnOnTheSortingViews() {
    this.stateIsSortingViewsTurn.next(true);
    this.stateIsSortViewsFromLargestToSmallest.next(
      !this.stateIsSortViewsFromLargestToSmallest.value
    );
    this.stateIsSortingDataTurn.next(false);
  }

  public getTheFilterInputValue(value: string) {
    this.stateFilterInputValue.next(value);
  }

  public onTheFormSubmit() {
    this.stateIsRequestSend.next(true);
  }
}
