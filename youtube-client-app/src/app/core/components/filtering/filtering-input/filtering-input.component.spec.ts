import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteringInputComponent } from './filtering-input.component';

describe('FilteringInputComponent', () => {
  let component: FilteringInputComponent;
  let fixture: ComponentFixture<FilteringInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilteringInputComponent]
    });
    fixture = TestBed.createComponent(FilteringInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
