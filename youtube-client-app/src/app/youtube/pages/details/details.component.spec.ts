import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [provideMockStore({})],
      declarations: [DetailsComponent]
    });
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    component.currentItem = {
      kind: '',
      etag: '',
      id: '',
      snippet: {
        publishedAt: '2023-05-30',
        channelId: '',
        title: '',
        description: '',
        thumbnails: {
          default: {
            url: '',
            width: 1500,
            height: 1500
          },
          medium: {
            url: '',
            width: 1500,
            height: 1500
          },
          standart: {
            url: '',
            width: 1500,
            height: 1500
          },
          maxres: {
            url: '',
            width: 1500,
            height: 1500
          },
          high: {
            url: '',
            width: 1500,
            height: 1500
          }
        },
        channelTitle: '',
        tags: ['tag1'],
        categoryId: '',
        liveBroadcastContent: '',
        localized: {
          title: '',
          description: ''
        },
        defaultAudioLanguage: ''
      },
      statistics: {
        viewCount: '1000',
        likeCount: '1000',
        favoriteCount: '1000',
        commentCount: '1000'
      }
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
