/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { HttpVideoService } from './http-video.service';

describe('HttpVideoService', () => {
  let service: HttpVideoService;
  let httpClientSpy: { get: jest.Mock };
  let storeSpy: { dispatch: jest.Mock };

  beforeEach(() => {
    httpClientSpy = { get: jest.fn() };
    storeSpy = { dispatch: jest.fn() };

    service = new HttpVideoService(
      httpClientSpy as any as HttpClient,
      storeSpy as any as Store
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve videos from the API using query', () => {
    const query = 'test';
    const maxResults = 20;
    const responseMock = {} as any;

    httpClientSpy.get.mockReturnValue(of(responseMock));

    service.getVideos(query, maxResults).subscribe((response) => {
      expect(response).toEqual(responseMock);
      expect(httpClientSpy.get).toHaveBeenCalledWith(`${service.searchURL}`, {
        params: expect.anything()
      });
      expect(storeSpy.dispatch).toHaveBeenCalled();
    });
  });

  it('should retrieve videos on a specific page from the API using query and token', () => {
    const query = 'test';
    const token = 'token';
    const maxResults = 20;
    const responseMock = {} as any;

    httpClientSpy.get.mockReturnValue(of(responseMock));

    service.getVideosOnPage(query, token, maxResults).subscribe((response) => {
      expect(response).toEqual(responseMock);
      expect(httpClientSpy.get).toHaveBeenCalledWith(`${service.searchURL}`, {
        params: expect.anything()
      });
      expect(storeSpy.dispatch).toHaveBeenCalled();
    });
  });

  it('should retrieve an item by ID from the API', () => {
    const id = '123';
    const responseMock = { items: [] } as any;

    httpClientSpy.get.mockReturnValue(of(responseMock));

    service.getItemById(id).subscribe((response) => {
      expect(response).toEqual(responseMock.items);
      expect(httpClientSpy.get).toHaveBeenCalledWith(
        `${service.searchVideosURL}`,
        {
          params: expect.anything()
        }
      );
    });
  });
});
