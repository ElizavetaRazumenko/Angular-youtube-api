/* eslint-disable @typescript-eslint/no-explicit-any */
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import VideoItems from 'src/app/search-responce/search-response.model';

import { HttpVideoService } from '../../youtube/services/http/http-video.service';
import { SearchFormService } from './search-form.service';

describe('SearchFormService', () => {
  let service: SearchFormService;
  let httpVideoServiceSpy: { getVideos: jest.Mock };
  let storeSpy: { dispatch: jest.Mock };

  beforeEach(() => {
    httpVideoServiceSpy = { getVideos: jest.fn() };
    storeSpy = { dispatch: jest.fn() };

    service = new SearchFormService(
      httpVideoServiceSpy as any as HttpVideoService,
      storeSpy as any as Store
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should change the query and length in the state', () => {
    const query = 'test';
    const length = 3;

    service.changeQuery(query, length);

    service.stateQuery.subscribe((state) => {
      expect(state.value).toEqual(query);
      expect(state.length).toEqual(length);
    });
  });

  it('should debounce and switchMap to getVideos on stateQuery change', () => {
    const query = 'test';
    const length = 3;
    const responseMock = {} as VideoItems;

    httpVideoServiceSpy.getVideos.mockReturnValue(of(responseMock));

    service.changeQuery(query, length);

    service.videos$.subscribe((response) => {
      expect(response).toEqual(responseMock);
      expect(httpVideoServiceSpy.getVideos).toHaveBeenCalledWith(query);
    });
  });

  it('should not call getVideos if the query length is not greater than the current length', () => {
    const query = 'test';
    const length = 5;

    service.changeQuery(query, length);

    expect(httpVideoServiceSpy.getVideos).not.toHaveBeenCalled();
  });

  it('should dispatch to the store when videos are retrieved', () => {
    const query = 'test';
    const length = 3;
    const responseMock = {} as VideoItems;

    httpVideoServiceSpy.getVideos.mockReturnValue(of(responseMock));

    service.changeQuery(query, length);

    service.videos$.subscribe(() => {
      expect(storeSpy.dispatch).toHaveBeenCalled();
    });
  });
});
