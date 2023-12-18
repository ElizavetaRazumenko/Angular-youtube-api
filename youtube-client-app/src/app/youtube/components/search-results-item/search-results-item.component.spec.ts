import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { SearchResultsItemComponent } from './search-results-item.component';

describe('SearchResultsItemComponent', () => {
  let component: SearchResultsItemComponent;
  let fixture: ComponentFixture<SearchResultsItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMockStore({})],
      declarations: [SearchResultsItemComponent]
    });
    fixture = TestBed.createComponent(SearchResultsItemComponent);
    component = fixture.componentInstance;
    component.cardInfo = {
      id: 'id',
      publishedAt: '2023-05-30',
      title: 'title',
      description: 'description',
      defaultURL: 'URL',
      highURL: 'URL',
      channelTitle: 'channelTitle',
      viewCount: '1000',
      likeCount: '1000',
      favoriteCount: '1000',
      commentCount: '1000'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
