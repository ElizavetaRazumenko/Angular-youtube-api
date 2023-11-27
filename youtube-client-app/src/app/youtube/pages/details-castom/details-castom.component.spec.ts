import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { DetailsCastomComponent } from './details-castom.component';

describe('DetailsCastomComponent', () => {
  let component: DetailsCastomComponent;
  let fixture: ComponentFixture<DetailsCastomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [provideMockStore({})],
      declarations: [DetailsCastomComponent]
    });
    fixture = TestBed.createComponent(DetailsCastomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
