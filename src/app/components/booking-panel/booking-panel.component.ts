import {Component, Input, OnInit} from '@angular/core';
import {Booking, Stylist} from '../../common';

@Component({
  selector: 'app-booking-panel',
  templateUrl: './booking-panel.component.html',
  styleUrls: ['./booking-panel.component.css']
})
export class BookingPanelComponent implements OnInit {

  @Input() stylist: Stylist;
  @Input() bookingList: Booking;

  @Input() total: number;

  constructor() {
  }

  ngOnInit() {
  }

}
