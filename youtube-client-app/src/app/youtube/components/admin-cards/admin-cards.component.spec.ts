import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { AdminCardsComponent } from './admin-cards.component';

describe('AdminCardsComponent', () => {
  let component: AdminCardsComponent;
  let fixture: ComponentFixture<AdminCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({})],
      declarations: [AdminCardsComponent]
    });
    fixture = TestBed.createComponent(AdminCardsComponent);
    component = fixture.componentInstance;
    component.cardInfo = {
      title: 'title',
      description: 'description',
      img: 'img',
      link: 'link',
      date: 'date',
      tags: ['tag1', 'tag2'],
      id: 'id'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
