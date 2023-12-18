import { fakeAsync, tick } from '@angular/core/testing';

import { MainPageService } from './main-page.service';

describe('MainPageService', () => {
  let service: MainPageService;

  beforeEach(() => {
    service = new MainPageService();
  });

  it('should turnOnTheSortingData set correct values', fakeAsync(() => {
    let testIsSortingDataTurn = false;
    let testIsSortDataFromLargestToSmallest = true;
    let testIsIsSortingViewsTurn = false;
    service.isSortingDataTurn$.subscribe((value) => {
      testIsSortingDataTurn = value;
    });
    service.isSortDataFromLargestToSmallest$.subscribe((value) => {
      testIsSortDataFromLargestToSmallest = value;
    });
    service.isSortingViewsTurn$.subscribe((value) => {
      testIsIsSortingViewsTurn = value;
    });
    service.turnOnTheSortingData();
    tick();
    expect(testIsSortingDataTurn).toBeTruthy();
    expect(testIsSortDataFromLargestToSmallest).toBeFalsy();
    expect(testIsIsSortingViewsTurn).toBeFalsy();
  }));

  it('should turnOnTheSortingViews set correct values', fakeAsync(() => {
    let stateIsSortingViewsTurn = false;
    let stateIsSortViewsFromLargestToSmallest = true;
    service.isSortingViewsTurn$.subscribe((value) => {
      stateIsSortingViewsTurn = value;
    });
    service.isSortDataFromLargestToSmallest$.subscribe((value) => {
      stateIsSortViewsFromLargestToSmallest = value;
    });

    service.turnOnTheSortingData();
    tick();
    expect(stateIsSortingViewsTurn).toBeFalsy();
    expect(stateIsSortViewsFromLargestToSmallest).toBeFalsy();
  }));
});
