import { TestBed } from '@angular/core/testing';

import { HttpVideoService } from './http-video.service';

describe('HttpVideoService', () => {
  let service: HttpVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
