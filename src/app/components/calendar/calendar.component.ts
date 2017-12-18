import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';
import {Booking, CalendarDate, Stylist} from '../../common';

declare var $: any;
declare var jquery: any;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  current = 0;
  @Input() stylist: Stylist;
  currentDate: any;
  today: any;
  weeks: any;
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  selectedDate;
  cellClicked: boolean;
  selectedDay: CalendarDate;

  justBookedList: Booking[] = [];
  totalOfJustBooked: number;

  constructor() {
  }

  ngOnInit() {
    this.totalOfJustBooked = 0;
    this.today = moment();

    this.currentDate = this.today;

    this.generateCalendar();

    this.cellClicked = false;

    this.selectedDate = null;
    this.selectedDay = null;
  }

  showBookingDiv($event) {
    if (this.selectedDate === null) {
      this.cellClicked = true;
      this.selectedDate = $event.day.mDate;
      this.selectedDay = $event.day;
    } else if (this.selectedDate === $event.day.mDate) {
      this.cellClicked = !this.cellClicked;
      this.selectedDate = null;
      this.selectedDay = null;
    } else {
      this.selectedDate = $event.day.mDate;
      this.selectedDay = $event.day;
    }
    console.log($event);
  }


  generateCalendar(): void {
    const dates = this.fillDates(this.currentDate);
    const weeks: CalendarDate[][] = [];
    while (dates.length > 0) {
      weeks.push(dates.splice(0, 7));
    }
    this.weeks = weeks;
  }


  fillDates(currentMoment: moment.Moment): CalendarDate[] {

    const startOfWeek = moment('2017-12-26').startOf('week').day();

    console.log('================================');
    console.log(startOfWeek);

    const firstOfMonth = moment(currentMoment).startOf('month').day();

    // const firstDayOfGrid = moment(currentMoment).startOf('month').subtract(firstOfMonth, 'days');
    // const start = firstDayOfGrid.date();

    const firstDayOfGrid = moment('2017-12-26').startOf('week');
    const start = moment(currentMoment).startOf('week').date();

    return _.range(start, start + 35)
      .map((date: number): CalendarDate => {
        const d = moment(firstDayOfGrid).date(date);
        // console.log(d);
        return {
          today: false,
          selected: false,
          mDate: d,
          busy: this.isBusy(d),
          pending: this.isPending(d),
          available: this.isAvailable(d),
          partiallyBusy: this.isPartiallyBusy(d),
          thismonth: this.isThisMonth(d),
          timeSlots: this.timeSlots(d)
        };
      });
  }

  prevMonth(): void {
    this.cellClicked = false;
    this.selectedDay = null;
    this.selectedDate = null;
    if (this.current === 0) {
      return;
    }

    this.currentDate = moment(this.currentDate).subtract(1, 'months');
    this.generateCalendar();
    this.current--;
  }

  nextMonth(): void {
    this.cellClicked = false;
    this.selectedDay = null;
    this.selectedDate = null;
    if (this.current === 1) {
      return;
    }
    this.currentDate = moment(this.currentDate).add(1, 'months');
    this.generateCalendar();
    this.current++;
  }

  isBusy(d): boolean {
    return _.sample([true, false]);
    // return false;
  }

  isPending(d): boolean {
    return false;
  }

  isAvailable(d): boolean {
    return false;
  }

  isPartiallyBusy(d): boolean {
    return false;
  }

  isThisMonth(d): boolean {
    return (this.currentDate.format('DD') < d.format('DD') && this.currentDate.format('MM') === d.format('MM')) || this.currentDate.format('MM') > d.format('MM');
  }

  timeSlots(d) {
    return [
      {name: '8AM - 12PM', charge: 10, currency: 'AUD', booked: this.isBusy(d), justBooked: false},
      {name: '12PM - 5PM', charge: 15, currency: 'AUD', booked: this.isBusy(d), justBooked: false}
    ];
  }

  bookASlot($event) {
    if ($event.add) {
      this.justBookedList.push({date: $event.date, timeSlot: $event.timeSlot});
    } else {
      this.justBookedList.splice(this.justBookedList.findIndex(value => {
        if (value.date === $event.date && value.timeSlot.name === $event.timeSlot.name) {
          return true;
        }
      }), 1);
    }
    this.justBookedList.sort((a, b) => {
      if (a.date === b.date) {
        if (a.timeSlot.name === '8AM - 12PM') {
          return -1;
        } else {
          return 1;
        }
      }
      if (a.date.isAfter(b.date)) {
        return 1;
      }
      return -1;
    });
    if (this.justBookedList.length > 0) {

      this.totalOfJustBooked = this.justBookedList.map(value => {
        return value.timeSlot.charge;
      }).reduce((sum, current) => {
        return sum + current;
      });
    }
  }


}

