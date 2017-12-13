import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CalendarDate} from '../../common';

@Component({
  selector: 'app-booking-cell',
  templateUrl: './booking-cell.component.html',
  styleUrls: ['./booking-cell.component.css']
})
export class BookingCellComponent implements OnInit {


  @Input() date: CalendarDate;
  @Output() bookSlot = new EventEmitter();

  clicked: boolean;

  constructor() {
  }

  ngOnInit() {
    this.clicked = false;
  }

  toggleClick() {
    this.clicked = !this.clicked;
  }

  clickACell(slot) {
    this.toggleClick();
    const index = this.date.timeSlots.indexOf(slot);
    this.date.timeSlots[index].justBooked = !this.date.timeSlots[index].justBooked;
  }

}
