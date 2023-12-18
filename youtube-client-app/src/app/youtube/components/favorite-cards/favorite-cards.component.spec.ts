import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { FavoriteCardsComponent } from './favorite-cards.component';

describe('FavoriteCardsComponent', () => {
  let component: FavoriteCardsComponent;
  let fixture: ComponentFixture<FavoriteCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({})],
      declarations: [FavoriteCardsComponent]
    });
    fixture = TestBed.createComponent(FavoriteCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
