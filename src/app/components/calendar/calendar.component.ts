import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  @Output() clicked = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.totalOfJustBooked = 0;
    this.today = moment();

    this.currentDate = this.today;

    // console.log(this.stylist);

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
    // console.log($event);
  }


  generateCalendar(): void {
    console.log(this.currentDate);
    const dates = this.fillDates(this.currentDate);
    const weeks: CalendarDate[][] = [];
    while (dates.length > 0) {
      weeks.push(dates.splice(0, 7));
    }
    this.weeks = weeks;
  }


  fillDates(currentMoment: moment.Moment): CalendarDate[] {

    // const startOfWeek = moment('2017-12-26').startOf('week').day();
    //
    // const firstOfMonth = moment(currentMoment).startOf('month').day();

    // const firstDayOfGrid = moment(currentMoment).startOf('month').subtract(firstOfMonth, 'days');
    // const start = firstDayOfGrid.date();

    const firstDayOfGrid = moment(currentMoment).startOf('week');
    const start = moment(currentMoment).startOf('week').date();

    return _.range(start, start + 35)
      .map((date: number): CalendarDate => {
        const d = moment(firstDayOfGrid).date(date);
        // console.log(d);
        return {
          selected: false,
          mDate: d,
          pending: this.isPending(d),
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

  isPending(d): boolean {
    return false;
  }

  isThisMonth(d): boolean {
    console.log(d.format('MM DD') + ' : ' + this.currentDate.format('MM DD'));
    console.log(this.currentDate.format('MM') > d.format('MM'));
    return (+this.currentDate.format('DD') < +d.format('DD') && this.currentDate.format('MM') === d.format('MM')) || +this.currentDate.format('M') < +d.format('M') && +this.currentDate.format('YYY') === +d.format('YYY');
  }

  timeSlots(d) {
    const timeSlots = [];
    // console.log(this.stylist);
    for (let j = 0; j < this.stylist.charges.length; j++) {

      let dateExist = false;
      let timeSExist = false;
      for (let i = 0; i < this.stylist.busyDates.length; i++) {
        if (this.stylist.busyDates[i].date.substr(0, 10) === d.format('YYYY-MM-DD')) {
          dateExist = true;
          const t = this.stylist.busyDates[i].timeSlot;
          if (t.name === this.stylist.charges[j].name) {
            timeSExist = true;
            // console.log('time exist');
            timeSlots.push({
              name: t.name,
              charge: t.charge,
              currency: t.currency,
              booked: true,
              justBooked: false
            });
          }
        }
      }
      if (!dateExist || !timeSExist) {
        timeSlots.push({
          name: this.stylist.charges[j].name,
          charge: this.stylist.charges[j].charge,
          currency: this.stylist.charges[j].currency,
          booked: false,
          justBooked: false
        });
      }
    }


    // console.log(timeSlots);
    return timeSlots;

    // return [
    //   {name: '8AM - 12PM', charge: 10, currency: 'AUD', booked: this.isBusy(d), justBooked: false},
    //   {name: '12PM - 5PM', charge: 15, currency: 'AUD', booked: this.isBusy(d), justBooked: false}
    // ];
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

    this.clicked.emit();
  }


}

