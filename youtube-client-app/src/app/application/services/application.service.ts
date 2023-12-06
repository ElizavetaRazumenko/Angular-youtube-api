import { Injectable } from '@angular/core';
import { BehaviorSubject, switchMap } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';

interface NameQueryParams {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private nameQueryParams: BehaviorSubject<NameQueryParams> =
    new BehaviorSubject({
      name: ''
    });

  constructor(private httpService: HttpService) {}

  public profileResponseData$ = this.nameQueryParams.pipe(
    switchMap((query) => this.httpService.sendChangeNameRequest(query.name))
  );

  public changeNameQueryParams(name: string) {
    this.nameQueryParams.next({ name });
  }
}
