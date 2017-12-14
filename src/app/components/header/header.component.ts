import {Component, OnInit} from '@angular/core';

// import $ = require('jquery');


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {




    // // ------------------------------------
    // // Defining the local dataset
    //
    // const car = ['Audi', 'BMW', 'Bugatti', 'Ferrari', 'Ford', 'Lamborghini', 'Mercedes Benz', 'Porsche', 'Rolls-Royce', 'Volkswagen'];
    //
    //
    // // Constructing the suggestion engine
    //
    // const cars = new Bloodhound({
    //
    //   datumTokenizer: Bloodhound.tokenizers.whitespace,
    //
    //   queryTokenizer: Bloodhound.tokenizers.whitespace,
    //
    //   local: car
    //
    // });
    //
    //
    // // Initializing the typeahead
    //
    // $('.typeahead').typeahead({
    //
    //     hint: true,
    //
    //     highlight: true, /* Enable substring highlighting */
    //
    //     minLength: 1 /* Specify minimum characters required for showing suggestions */
    //
    //   },
    //
    //   {
    //
    //     name: 'cars',
    //
    //     source: cars
    //
    //   });
    //
    // // ------------------------------------

  }

}
