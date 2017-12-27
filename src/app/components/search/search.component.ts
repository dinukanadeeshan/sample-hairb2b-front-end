import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {CommonService} from '../../services/common.service';
import {JobRoleFilter, Skill} from '../../common';
import {StylistService} from '../../services/stylist.service';

// import $ = require('jquery');


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  skills: Skill[];
  names: string[];

  placeholder: string;

  search_by_name: boolean;
  search_by = ' By Skill';

  @Input() initial: InitialSearchBar;
  @Output() myEvent = new EventEmitter();

  q: string;

  last_q: string;
  job_roles;
  job_role_filters: JobRoleFilter[] = [];
  maxSlider = 100;
  valueOfSlider = 100;

  search_text = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(
        term => term.length < 1 ? [] :
          !this.search_by_name ? this.skills.filter(v => v.skill.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10).map(v => v.skill) :
            this.names.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)
      );

  constructor(private commonService: CommonService, private stylistService: StylistService) {
  }

  ngOnInit() {
    this.placeholder = 'What should stylist can do?';
    this.search_by_name = false;

    this.commonService.getSampleSkills().subscribe(data => {
      this.skills = data;
    });

    this.stylistService.getNames().subscribe(data => {
      this.names = data;
    });

    if (this.initial) {
      this.q = this.initial.q;
      this.search_by_name = this.initial.search_by_name === 'true' ? true : false;
    }

    if (this.search_by_name) {
      this.placeholder = 'What is the name of stylist?';
      this.search_by = ' By Name';
    } else {
      this.placeholder = 'What should stylist can do?';
      this.search_by = ' By Skill';
    }


    this.commonService.getJobRoles().subscribe(data => {
      this.job_roles = data;
      this.job_role_filters = this.job_roles.map(val => {

        return {id: val.id, role: val.role, selected: false};
      });

    });
  }

  changeSearchBy() {
    const temp = this.last_q;
    this.last_q = this.q;
    this.q = temp;
    this.search_by_name = !this.search_by_name;
    if (this.search_by_name) {
      this.placeholder = 'What is the name of stylist?';
      this.search_by = ' By Name';
    } else {
      this.placeholder = 'What should stylist can do?';
      this.search_by = ' By Skill';
    }
  }

  search() {
    this.myEvent.emit({q: this.q, search_by_name: this.search_by_name});
  }

}

interface InitialSearchBar {
  q: string;
  search_by_name: string;
}


// const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
//   'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
//   'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
//   'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
//   'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
//   'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
//   'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
//   'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
//   'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
// ];
//
// const state = new Bloodhound({
//   datumTokenizer: Bloodhound.tokenizers.whitespace,
//   queryTokenizer: Bloodhound.tokenizers.whitespace,
//   // `states` is an array of state names defined in "The Basics"
//   local: states
// });


// $('#searchStylist').typeahead({
//     hint: true,
//     highlight: true,
//     minLength: 1
//   },
//   {
//     name: 'states',
//     source: state
//   });
