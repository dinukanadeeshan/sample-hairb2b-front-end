import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  placeholder: string;

  search_by_name: boolean;

  constructor() {
  }

  ngOnInit() {
    this.placeholder = 'The stylist, who can';
    this.search_by_name = false;
  }

  changeSearchBy() {
    this.search_by_name = !this.search_by_name;
    if (this.search_by_name) {
      this.placeholder = 'Name of stylist';
    } else {
      this.placeholder = 'The stylist, who can';
    }
  }

}
