/* eslint-disable class-methods-use-this */
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_KEY, YOUTUBE_API_LINK } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class YoutubeInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<string>,
    next: HttpHandler
  ): Observable<HttpEvent<string>> {
    return next.handle(
      req.clone({
        url: `${YOUTUBE_API_LINK}/${req.url}`,
        setParams: {
          key: API_KEY
        }
      })
    );
  }
}
