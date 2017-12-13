import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CalendarDate} from '../../common';

@Component({
  selector: 'app-calendar-cell',
  templateUrl: './calendar-cell.component.html',
  styleUrls: ['./calendar-cell.component.css']
})
export class CalendarCellComponent implements OnInit {

  @Input() day: CalendarDate;

  @Input() selectedDay: CalendarDate;

  @Output() clickEvent = new EventEmitter();


  constructor() {
  }

  ngOnInit() {

  }


  click($event) {
    console.log(this.selectedDay);

    this.clickEvent.emit({day: this.day});
  }

}
