import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {


  starsCount = 3;

  timeSlots = [{name: '8AM-12PM', price: 10, currency: 'AUD'}, {name: '12PM-5PM', price: 15, currency: 'AUD'}];

  locations = ['Perth', 'Darwin', 'Adelaide', 'Melbourne', 'Canberra', 'Hobart', 'Brisbane'];

  skills = ['Bridal', 'Curling', 'Rebonding', 'Hair Coloring', 'Hair Cutting'];

  job_role = 'Educator';

  stylist_name = 'Sofia Maekinen';

  description = 'Graduated as a hairdresser and barber 2014. Since then I have been working in 2 different salons in my homecountry Finland, one barber shop and 2 different salons in Australia in Cairns and Coffs Harbour. As a hairsalon assistant I have been working in 2 different high-end salons in Melbourne and Sydney.';

  constructor() {
  }

  ngOnInit() {
  }

}
