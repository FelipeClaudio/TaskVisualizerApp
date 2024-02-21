import { Component } from '@angular/core';
import { HomePageServiceService } from '../services/home-page-service.service';
import { IDateApiResponse } from '../models/date-api-response';
import { IToDoResponse } from '../models/to-do-response';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  _dateTime: IDateApiResponse;
  private _toDo: IToDoResponse[];
  constructor(private homePageService: HomePageServiceService){
    this._dateTime = {
      date: "fake date",
      milliseconds_since_epoch: 123,
      time: "fake time"
    }

    this._toDo = [{
      dueBy: "fake date",
      title: "fake title",
      isComplete: false
    }]
  }

  get dateTime(): IDateApiResponse
  {
    return this._dateTime;
  } 

  updateData():void{
    this.homePageService.getData().subscribe(
      (response) => {
        this._dateTime = response;
      });
  }

  updateToDoList(): void {
    this.homePageService.getToDoList().subscribe(
      (response) => {
        this._toDo = response;
        console.log("Here");
      });
  }

  get toDoList(): IToDoResponse[] {
    return this._toDo;
  }
}
