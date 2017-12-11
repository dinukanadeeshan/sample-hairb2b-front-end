import {Component, OnInit} from '@angular/core';

declare var $: any;
declare var jquery: any;git

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    $('.responsive-calendar').responsiveCalendar();

  }

}
