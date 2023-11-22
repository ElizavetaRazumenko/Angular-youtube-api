import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCastomComponent } from './details-castom.component';

describe('DetailsCastomComponent', () => {
  let component: DetailsCastomComponent;
  let fixture: ComponentFixture<DetailsCastomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
