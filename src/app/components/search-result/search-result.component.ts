import {Component, OnInit} from '@angular/core';
import {Stylist} from '../../common';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  styist_list_: Array<Stylist>;

  constructor() {
  }

  ngOnInit() {
    this.styist_list_ = [
      {
        id: 2,
        user_id: 1,
        is_active: true,
        created_date: new Date(),
        first_name: 'Sofia',
        last_name: 'Maekinen',
        job_role: 'Educator',
        profile_pic: '/dd/',
        address_line_1: 'U 235',
        address_line_2: '201-203 BROADWAY AVE',
        city: 'WEST BEACH',
        state: 'SA',
        zip: 5024,
        country: 'Australia',
        telephone: 711225455,
        description: 'Graduated as a hairdresser and barber 2014. Since then I have been working in 2 different salons in my homecountry Finland,' +
        ' one barber shop and 2 different salons in Australia in Cairns and Coffs Harbour. As a hairsalon assistant I have been working in 2 different high-end salons in Melbourne and Sydney.',
        terms_and_condition: '',
        skills: ['Bridal', 'Curling', 'Rebonding', 'Hair Coloring', 'Hair Cutting'],
        pref_locations: ['Perth', 'Darwin', 'Adelaide', 'Melbourne', 'Canberra', 'Hobart', 'Brisbane'],
        charges: [{name: '8AM-12PM', price: 10, currency: 'AUD'}, {name: '12PM-5PM', price: 15, currency: 'AUD'}],
        rating: 4
      },
      {
        id: 2,
        user_id: 1,
        is_active: true,
        created_date: new Date(),
        first_name: 'Sofia',
        last_name: 'Maekinen',
        job_role: 'Educator',
        profile_pic: '/dd/',
        address_line_1: 'U 235',
        address_line_2: '201-203 BROADWAY AVE',
        city: 'WEST BEACH',
        state: 'SA',
        zip: 5024,
        country: 'Australia',
        telephone: 711225455,
        description: 'Graduated as a hairdresser and barber 2014. Since then I have been working in 2 different salons in my homecountry Finland,' +
        ' one barber shop and 2 different salons in Australia in Cairns and Coffs Harbour. As a hairsalon assistant I have been working in 2 different high-end salons in Melbourne and Sydney.',
        terms_and_condition: '',
        skills: ['Bridal', 'Curling', 'Rebonding', 'Hair Coloring', 'Hair Cutting'],
        pref_locations: ['Perth', 'Darwin', 'Adelaide', 'Melbourne', 'Canberra', 'Hobart', 'Brisbane'],
        charges: [{name: '8AM-12PM', price: 10, currency: 'AUD'}, {name: '12PM-5PM', price: 15, currency: 'AUD'}],
        rating: 4
      },
      {
        id: 2,
        user_id: 1,
        is_active: true,
        created_date: new Date(),
        first_name: 'Sofia',
        last_name: 'Maekinen',
        job_role: 'Educator',
        profile_pic: '/dd/',
        address_line_1: 'U 235',
        address_line_2: '201-203 BROADWAY AVE',
        city: 'WEST BEACH',
        state: 'SA',
        zip: 5024,
        country: 'Australia',
        telephone: 711225455,
        description: 'Graduated as a hairdresser and barber 2014. Since then I have been working in 2 different salons in my homecountry Finland,' +
        ' one barber shop and 2 different salons in Australia in Cairns and Coffs Harbour. As a hairsalon assistant I have been working in 2 different high-end salons in Melbourne and Sydney.',
        terms_and_condition: '',
        skills: ['Bridal', 'Curling', 'Rebonding', 'Hair Coloring', 'Hair Cutting'],
        pref_locations: ['Perth', 'Darwin', 'Adelaide', 'Melbourne', 'Canberra', 'Hobart', 'Brisbane'],
        charges: [{name: '8AM-12PM', price: 10, currency: 'AUD'}, {name: '12PM-5PM', price: 15, currency: 'AUD'}],
        rating: 4
      },
      {
        id: 2,
        user_id: 1,
        is_active: true,
        created_date: new Date(),
        first_name: 'Sofia',
        last_name: 'Maekinen',
        job_role: 'Educator',
        profile_pic: '/dd/',
        address_line_1: 'U 235',
        address_line_2: '201-203 BROADWAY AVE',
        city: 'WEST BEACH',
        state: 'SA',
        zip: 5024,
        country: 'Australia',
        telephone: 711225455,
        description: 'Graduated as a hairdresser and barber 2014. Since then I have been working in 2 different salons in my homecountry Finland,' +
        ' one barber shop and 2 different salons in Australia in Cairns and Coffs Harbour. As a hairsalon assistant I have been working in 2 different high-end salons in Melbourne and Sydney.',
        terms_and_condition: '',
        skills: ['Bridal', 'Curling', 'Rebonding', 'Hair Coloring', 'Hair Cutting'],
        pref_locations: ['Perth', 'Darwin', 'Adelaide', 'Melbourne', 'Canberra', 'Hobart', 'Brisbane'],
        charges: [{name: '8AM-12PM', price: 10, currency: 'AUD'}, {name: '12PM-5PM', price: 15, currency: 'AUD'}],
        rating: 4
      },
      {
        id: 2,
        user_id: 1,
        is_active: true,
        created_date: new Date(),
        first_name: 'Sofia',
        last_name: 'Maekinen',
        job_role: 'Educator',
        profile_pic: '/dd/',
        address_line_1: 'U 235',
        address_line_2: '201-203 BROADWAY AVE',
        city: 'WEST BEACH',
        state: 'SA',
        zip: 5024,
        country: 'Australia',
        telephone: 711225455,
        description: 'Graduated as a hairdresser and barber 2014. Since then I have been working in 2 different salons in my homecountry Finland,' +
        ' one barber shop and 2 different salons in Australia in Cairns and Coffs Harbour. As a hairsalon assistant I have been working in 2 different high-end salons in Melbourne and Sydney.',
        terms_and_condition: '',
        skills: ['Bridal', 'Curling', 'Rebonding', 'Hair Coloring', 'Hair Cutting'],
        pref_locations: ['Perth', 'Darwin', 'Adelaide', 'Melbourne', 'Canberra', 'Hobart', 'Brisbane'],
        charges: [{name: '8AM-12PM', price: 10, currency: 'AUD'}, {name: '12PM-5PM', price: 15, currency: 'AUD'}],
        rating: 4
      },
      {
        id: 2,
        user_id: 1,
        is_active: true,
        created_date: new Date(),
        first_name: 'Sofia',
        last_name: 'Maekinen',
        job_role: 'Educator',
        profile_pic: '/dd/',
        address_line_1: 'U 235',
        address_line_2: '201-203 BROADWAY AVE',
        city: 'WEST BEACH',
        state: 'SA',
        zip: 5024,
        country: 'Australia',
        telephone: 711225455,
        description: 'Graduated as a hairdresser and barber 2014. Since then I have been working in 2 different salons in my homecountry Finland,' +
        ' one barber shop and 2 different salons in Australia in Cairns and Coffs Harbour. As a hairsalon assistant I have been working in 2 different high-end salons in Melbourne and Sydney.',
        terms_and_condition: '',
        skills: ['Bridal', 'Curling', 'Rebonding', 'Hair Coloring', 'Hair Cutting'],
        pref_locations: ['Perth', 'Darwin', 'Adelaide', 'Melbourne', 'Canberra', 'Hobart', 'Brisbane'],
        charges: [{name: '8AM-12PM', price: 10, currency: 'AUD'}, {name: '12PM-5PM', price: 15, currency: 'AUD'}],
        rating: 4
      }
    ];

  }

}
