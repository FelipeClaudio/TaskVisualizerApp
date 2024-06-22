import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDateApiResponse } from '../models/date-api-response';
import { IToDoResponse } from '../models/to-do-response';

@Injectable({
  providedIn: 'root'
})
export class HomePageServiceService {
  constructor(private http: HttpClient) { }

  // This needs to be moved to a configuration.
  private taskPrioritizerBackendUrl = 'http://localhost:60123/todos';

  getData(): Observable<IDateApiResponse> {
    return this.http.get<IDateApiResponse>('http://date.jsontest.com/');
  }

  getToDoList(): Observable<IToDoResponse[]> {
    return this.http.get<IToDoResponse[]>(this.taskPrioritizerBackendUrl);
  }
}
