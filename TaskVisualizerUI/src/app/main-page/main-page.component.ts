import { Component } from '@angular/core';
import { HomePageServiceService } from '../services/home-page-service.service';
import { IDateApiResponse } from '../models/date-api-response';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  _dateTime: IDateApiResponse;

  constructor(private homePageService: HomePageServiceService) {
    this._dateTime = {
      date: 'fake date',
      milliseconds_since_epoch: 123,
      time: 'fake time',
    };
  }

  get dateTime(): IDateApiResponse {
    return this._dateTime;
  }

  updateData(): void {
    this.homePageService.getData().subscribe((response) => {
      this._dateTime = response;
    });
  }
}
