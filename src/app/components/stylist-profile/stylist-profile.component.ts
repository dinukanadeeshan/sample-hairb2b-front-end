import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Stylist} from '../../common';
import {StylistService} from '../../services/stylist.service';
import {CommonService} from '../../services/common.service';

@Component({
  selector: 'app-stylist-profile',
  templateUrl: './stylist-profile.component.html',
  styleUrls: ['./stylist-profile.component.css']
})
export class StylistProfileComponent implements OnInit {


  stylist: Stylist;

  constructor(private route: ActivatedRoute, private stylistService: StylistService, private commonService: CommonService) {
  }

  ngOnInit() {

    this.stylist = {
      id: 0,
      user_id: 0,
      is_active: false,
      created_date: null,
      first_name: '',
      last_name: '',
      job_role: '',
      profile_pic: '',
      address_line_1: '',
      address_line_2: '',
      city: '',
      state: '',
      zip: 0,
      country: '',
      telephone: 0,
      description: '',
      terms_and_condition: '',
      skills: [],
      pref_locations: [],
      charges: [],
      rating: 0,
      busyDates: []
    };

    const id = +this.route.snapshot.paramMap.get('id');

    this.stylistService.getStylistProfile(id).subscribe(data => {
      this.stylist = data;
    });


    console.log('ngoninit - stylist profile component');
    // this.commonService.getImage().subscribe(data => {
    //   this.img = data.img;
    // });
  }

}
