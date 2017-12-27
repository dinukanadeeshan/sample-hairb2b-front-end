import {Component, OnInit} from '@angular/core';
import {BusyDate, Stylist} from '../../common';
import {StylistService} from '../../services/stylist.service';
import {ActivatedRoute} from '@angular/router';
import * as moment from 'moment';
import {Moment} from 'moment';
import {extendMoment} from 'moment-range';

const m = extendMoment(moment);

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  styist_list_: Array<Stylist>;
  search_results: Array<Stylist> = [];
  query: any;
  data_recieved = false;

  constructor(private stylistService: StylistService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(v => this.query = v);
    console.log(this.query);

    if (this.query.search_by_name === 'true') {
      this.stylistService.getStylistByName(this.query.q).subscribe(data => {
        this.styist_list_ = data;
        this.search_results = this.styist_list_;
        this.data_recieved = true;
      });
    } else {
      console.log('search by skill no');
      this.stylistService.getStylistBySkill(this.query.q).subscribe(data => {
        this.styist_list_ = data;
        this.search_results = this.styist_list_;
        this.data_recieved = true;
      });
    }
  }

  call($event) {
    // this.route.queryParams.subscribe(v => this.query = v);

    this.data_recieved = false;
    console.log(this.query);

    if ($event.search_by_name) {
      this.stylistService.getStylistByName($event.q).subscribe(data => {
        this.styist_list_ = data;
        this.search_results = this.styist_list_;
        this.data_recieved = true;
      });
    } else {
      this.stylistService.getStylistBySkill($event.q).subscribe(data => {
        this.styist_list_ = data;
        this.search_results = this.styist_list_;
        this.data_recieved = true;
      });
    }
  }

  clearFilter() {
    this.styist_list_ = this.search_results;
  }

  filterResult($event) {
    let nonSelected = true;
    this.styist_list_ = this.search_results.filter(value => {
      for (let i = 0; i < $event.job_roles.length; i++) {
        // console.log($event.job_roles[i].role + '  ' + value.job_role);
        if ($event.job_roles[i].selected) {
          nonSelected = false;
        }
        if ($event.job_roles[i].selected && $event.job_roles[i].role === value.job_role) {
          nonSelected = false;
          return true;
        }
      }
      return false;
    });


    if (nonSelected) {
      this.styist_list_ = this.search_results;
    }

    this.styist_list_ = this.styist_list_.filter(value => {
      for (let i = 0; i < value.charges.length; i++) {
        if (value.charges[i].charge < $event.max_charge) {
          return true;
        }
      }
      return false;
    });
    if ($event.date_range.from && $event.date_range.to) {
      const from = moment($event.date_range.from);
      const to = moment($event.date_range.to);
      if (from.isAfter(to)) {
        return;
      }
      if (from.format('YYYY-MM-DD') !== to.format('YYYY-MM-DD')) {


        this.styist_list_ = this.styist_list_.filter(sty => {

          const range = m.range($event.date_range.from, $event.date_range.to);
          const days = Array.from(range.by('days'));
          for (const bd of sty.busyDates) {
            const momentBusyDate = moment(bd.date.substr(0, 10));

            // console.log(bd.date + ' ' + sty.first_name + ' ' + $event.date_range.from + ' ' + $event.date_range.to);
            // console.log(from + ' ' + to + ' - ' + momentBusyDate);
            if (momentBusyDate.isBetween(from, to) || from.format('YYYY-MM-DD') === momentBusyDate.format('YYYY-MM-DD') || to.format('YYYY-MM-DD') === momentBusyDate.format('YYYY-MM-DD')) {
              // const index = days.findIndex((value: Moment) => {
              //   if (value.format('YYYY-MM-DD') === momentBusyDate.format('YYYY-MM-DD') && this.isFullDayBusy(sty.busyDates, momentBusyDate)) {
              //     return true;
              //   }

              return false;
              // });
              // days.splice(index, 1);
            }
          }
          return true;

          // console.log(days.map(val => val.format('YYYY-MM-DD')));
          // return days.length > 0;
        });
      } else {
        this.styist_list_ = this.styist_list_.filter(sty => {
          for (const bd of sty.busyDates) {
            // if (moment(bd.date).format('YYYY-MM-DD') === from.format('YYYY-MM-DD') && this.isFullDayBusy(sty.busyDates, from)) {
            if (moment(bd.date).format('YYYY-MM-DD') === from.format('YYYY-MM-DD')) {
              return false;
            }
          }
          return true;
        });
      }
    }

  }

  isFullDayBusy(busyDates: BusyDate[], date: Moment): boolean {
    let count = 0;
    for (const d of busyDates) {
      if (moment(d.date).format('YYYY-MM-DD') === date.format('YYYY-MM-DD')) {
        count++;
      }
    }

    return count > 1;
  }
}
