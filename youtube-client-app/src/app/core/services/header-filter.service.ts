import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderFilterService {
  private stateIsFilterVisible: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );
  public isFilterVisible$: Observable<boolean> =
    this.stateIsFilterVisible.asObservable();

  public changeFilterVisible(): void {
    this.stateIsFilterVisible.next(!this.stateIsFilterVisible.value);
  }
}
