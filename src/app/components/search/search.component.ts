import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  placeholder: string;

  search_by_name: boolean;

  @Output() myEvent = new EventEmitter();

  q: string;

  constructor() {
  }

  ngOnInit() {
    this.placeholder = 'What should stylist can do?';
    this.search_by_name = false;
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
