import { Component } from '@angular/core';
import { HomePageServiceService } from '../services/home-page-service.service';
import { IToDoResponse } from '../models/to-do-response';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-example-table',
  templateUrl: './example-table.component.html',
  styleUrls: ['./example-table.component.scss'],
  imports: [MatTableModule],
  standalone: true
})
export class ExampleTableComponent {
  private _toDo: IToDoResponse[];
  private _displayedColumns: string[];

  constructor(private homePageService: HomePageServiceService) {
    this._toDo = [
      {
        id: 1,
        dueBy: 'fake date',
        title: 'fake title',
        isComplete: false,
      },
    ];
    this.updateToDoList();

    this._displayedColumns = Object.keys(this._toDo[0]);
  }

  updateToDoList(): void {
    this.homePageService.getToDoList().subscribe((response) => {
      this._toDo = response;
    });
  }

  get toDoList(): IToDoResponse[] {
    return this._toDo;
  }

  get displayedColumns(): string[] {
    return this._displayedColumns
  }
}
