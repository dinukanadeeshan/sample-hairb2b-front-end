import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {CommonService} from '../../services/common.service';
import {Skill} from '../../common';
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

  @Output() myEvent = new EventEmitter();

  q: string;


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
  }

  changeSearchBy() {
    this.search_by_name = !this.search_by_name;
    if (this.search_by_name) {
      this.placeholder = 'What is the name of stylist?';
    } else {
      this.placeholder = 'What should stylist can do?';
    }
  }

  search() {
    this.myEvent.emit({q: this.q, search_by_name: this.search_by_name});
  }

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
