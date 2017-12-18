import {Component, OnInit} from '@angular/core';
import {Stylist} from '../../common';
import {StylistService} from '../../services/stylist.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  styist_list_: Array<Stylist>;
  search_results: Array<Stylist>;
  query: any;

  constructor(private stylistService: StylistService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(v => this.query = v);
    console.log(this.query);

    if (this.query.search_by_name === 'true') {
      this.stylistService.getStylistByName(this.query.q).subscribe(data => {
        this.styist_list_ = data;
        this.search_results = this.styist_list_;
      });
    } else {
      console.log('search by skill no');
      this.stylistService.getStylistBySkill(this.query.q).subscribe(data => {
        this.styist_list_ = data;
        this.search_results = this.styist_list_;
      });
    }
  }

  call($event) {
    // this.route.queryParams.subscribe(v => this.query = v);


    console.log(this.query);

    if ($event.search_by_name) {
      this.stylistService.getStylistByName($event.q).subscribe(data => {
        this.styist_list_ = data;
        this.search_results = this.styist_list_;
      });
    } else {
      this.stylistService.getStylistBySkill($event.q).subscribe(data => {
        this.styist_list_ = data;
        this.search_results = this.styist_list_;
      });
    }
  }

  filterResult($event) {
    let nonSelected = true;
    this.styist_list_ = this.search_results.filter(value => {
      for (let i = 0; i < $event.job_roles.length; i++) {
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


  }
}


//
//
// this.styist_list_ = [
//   {
//     id: 2,
//     user_id: 1,
//     is_active: true,
//     created_date: new Date(),
//     first_name: 'Sofia',
//     last_name: 'Maekinen',
//     job_role: 'Educator',
//     profile_pic: '/dd/',
//     address_line_1: 'U 235',
//     address_line_2: '201-203 BROADWAY AVE',
//     city: 'WEST BEACH',
//     state: 'SA',
//     zip: 5024,
//     country: 'Australia',
//     telephone: 711225455,
//     description: 'Graduated as a hairdresser and barber 2014. Since then I have been working in 2 different salons in my homecountry Finland,' +
//     ' one barber shop and 2 different salons in Australia in Cairns and Coffs Harbour. As a hairsalon assistant I have been working in 2 different high-end salons in Melbourne and Sydney.',
//     terms_and_condition: '',
//     skills: ['Bridal', 'Curling', 'Rebonding', 'Hair Coloring', 'Hair Cutting'],
//     pref_locations: ['Perth', 'Darwin', 'Adelaide', 'Melbourne', 'Canberra', 'Hobart', 'Brisbane'],
//     charges: [{name: '8AM-12PM', price: 10, currency: 'AUD'}, {name: '12PM-5PM', price: 15, currency: 'AUD'}],
//     rating: 4
//   },
//   {
//     id: 2,
//     user_id: 1,
//     is_active: true,
//     created_date: new Date(),
//     first_name: 'Sofia',
//     last_name: 'Maekinen',
//     job_role: 'Educator',
//     profile_pic: '/dd/',
//     address_line_1: 'U 235',
//     address_line_2: '201-203 BROADWAY AVE',
//     city: 'WEST BEACH',
//     state: 'SA',
//     zip: 5024,
//     country: 'Australia',
//     telephone: 711225455,
//     description: 'Graduated as a hairdresser and barber 2014. Since then I have been working in 2 different salons in my homecountry Finland,' +
//     ' one barber shop and 2 different salons in Australia in Cairns and Coffs Harbour. As a hairsalon assistant I have been working in 2 different high-end salons in Melbourne and Sydney.',
//     terms_and_condition: '',
//     skills: ['Bridal', 'Curling', 'Rebonding', 'Hair Coloring', 'Hair Cutting'],
//     pref_locations: ['Perth', 'Darwin', 'Adelaide', 'Melbourne', 'Canberra', 'Hobart', 'Brisbane'],
//     charges: [{name: '8AM-12PM', price: 10, currency: 'AUD'}, {name: '12PM-5PM', price: 15, currency: 'AUD'}],
//     rating: 4
//   },
//   {
//     id: 2,
//     user_id: 1,
//     is_active: true,
//     created_date: new Date(),
//     first_name: 'Sofia',
//     last_name: 'Maekinen',
//     job_role: 'Educator',
//     profile_pic: '/dd/',
//     address_line_1: 'U 235',
//     address_line_2: '201-203 BROADWAY AVE',
//     city: 'WEST BEACH',
//     state: 'SA',
//     zip: 5024,
//     country: 'Australia',
//     telephone: 711225455,
//     description: 'Graduated as a hairdresser and barber 2014. Since then I have been working in 2 different salons in my homecountry Finland,' +
//     ' one barber shop and 2 different salons in Australia in Cairns and Coffs Harbour. As a hairsalon assistant I have been working in 2 different high-end salons in Melbourne and Sydney.',
//     terms_and_condition: '',
//     skills: ['Bridal', 'Curling', 'Rebonding', 'Hair Coloring', 'Hair Cutting'],
//     pref_locations: ['Perth', 'Darwin', 'Adelaide', 'Melbourne', 'Canberra', 'Hobart', 'Brisbane'],
//     charges: [{name: '8AM-12PM', price: 10, currency: 'AUD'}, {name: '12PM-5PM', price: 15, currency: 'AUD'}],
//     rating: 4
//   },
//   {
//     id: 2,
//     user_id: 1,
//     is_active: true,
//     created_date: new Date(),
//     first_name: 'Sofia',
//     last_name: 'Maekinen',
//     job_role: 'Educator',
//     profile_pic: '/dd/',
//     address_line_1: 'U 235',
//     address_line_2: '201-203 BROADWAY AVE',
//     city: 'WEST BEACH',
//     state: 'SA',
//     zip: 5024,
//     country: 'Australia',
//     telephone: 711225455,
//     description: 'Graduated as a hairdresser and barber 2014. Since then I have been working in 2 different salons in my homecountry Finland,' +
//     ' one barber shop and 2 different salons in Australia in Cairns and Coffs Harbour. As a hairsalon assistant I have been working in 2 different high-end salons in Melbourne and Sydney.',
//     terms_and_condition: '',
//     skills: ['Bridal', 'Curling', 'Rebonding', 'Hair Coloring', 'Hair Cutting'],
//     pref_locations: ['Perth', 'Darwin', 'Adelaide', 'Melbourne', 'Canberra', 'Hobart', 'Brisbane'],
//     charges: [{name: '8AM-12PM', price: 10, currency: 'AUD'}, {name: '12PM-5PM', price: 15, currency: 'AUD'}],
//     rating: 4
//   },
//   {
//     id: 2,
//     user_id: 1,
//     is_active: true,
//     created_date: new Date(),
//     first_name: 'Sofia',
//     last_name: 'Maekinen',
//     job_role: 'Educator',
//     profile_pic: '/dd/',
//     address_line_1: 'U 235',
//     address_line_2: '201-203 BROADWAY AVE',
//     city: 'WEST BEACH',
//     state: 'SA',
//     zip: 5024,
//     country: 'Australia',
//     telephone: 711225455,
//     description: 'Graduated as a hairdresser and barber 2014. Since then I have been working in 2 different salons in my homecountry Finland,' +
//     ' one barber shop and 2 different salons in Australia in Cairns and Coffs Harbour. As a hairsalon assistant I have been working in 2 different high-end salons in Melbourne and Sydney.',
//     terms_and_condition: '',
//     skills: ['Bridal', 'Curling', 'Rebonding', 'Hair Coloring', 'Hair Cutting'],
//     pref_locations: ['Perth', 'Darwin', 'Adelaide', 'Melbourne', 'Canberra', 'Hobart', 'Brisbane'],
//     charges: [{name: '8AM-12PM', price: 10, currency: 'AUD'}, {name: '12PM-5PM', price: 15, currency: 'AUD'}],
//     rating: 4
//   },
//   {
//     id: 2,
//     user_id: 1,
//     is_active: true,
//     created_date: new Date(),
//     first_name: 'Sofia',
//     last_name: 'Maekinen',
//     job_role: 'Educator',
//     profile_pic: '/dd/',
//     address_line_1: 'U 235',
//     address_line_2: '201-203 BROADWAY AVE',
//     city: 'WEST BEACH',
//     state: 'SA',
//     zip: 5024,
//     country: 'Australia',
//     telephone: 711225455,
//     description: 'Graduated as a hairdresser and barber 2014. Since then I have been working in 2 different salons in my homecountry Finland,' +
//     ' one barber shop and 2 different salons in Australia in Cairns and Coffs Harbour. As a hairsalon assistant I have been working in 2 different high-end salons in Melbourne and Sydney.',
//     terms_and_condition: '',
//     skills: ['Bridal', 'Curling', 'Rebonding', 'Hair Coloring', 'Hair Cutting'],
//     pref_locations: ['Perth', 'Darwin', 'Adelaide', 'Melbourne', 'Canberra', 'Hobart', 'Brisbane'],
//     charges: [{name: '8AM-12PM', price: 10, currency: 'AUD'}, {name: '12PM-5PM', price: 15, currency: 'AUD'}],
//     rating: 4
//   }
// ];
