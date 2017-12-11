import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Stylist} from '../../common';
import {StylistService} from '../../services/stylist.service';

@Component({
  selector: 'app-stylist-profile',
  templateUrl: './stylist-profile.component.html',
  styleUrls: ['./stylist-profile.component.css']
})
export class StylistProfileComponent implements OnInit {


  stylist: Stylist;


  constructor(private route: ActivatedRoute, private stylistService: StylistService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.stylistService.getSampleStylistProfile().subscribe(data => {
      this.stylist = data;
    });
  }

}
