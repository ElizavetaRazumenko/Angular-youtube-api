import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  public isRequestSend = false;

  public isSortingDataTurn = false;
  public isSortDataFromLargestToSmallest = true;

  public isSortingViewsTurn = false;
  public isSortViewsFromLargestToSmallest = true;

  public filterInputValue = '';

  public turnOnSortingData() {
    this.isSortingDataTurn = true;
    this.isSortDataFromLargestToSmallest =
      !this.isSortDataFromLargestToSmallest;
    this.isSortingViewsTurn = false;
  }

  public turnOnSortingViews() {
    this.isSortingViewsTurn = true;
    this.isSortViewsFromLargestToSmallest =
      !this.isSortViewsFromLargestToSmallest;
    this.isSortingDataTurn = false;
  }

  public getFilterInputValue(value: string) {
    this.filterInputValue = value;
  }

  public onFormSubmit() {
    this.isRequestSend = true;
  }
}
