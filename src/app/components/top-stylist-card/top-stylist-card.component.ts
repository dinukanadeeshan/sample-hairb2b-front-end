import {Component, Input, OnInit} from '@angular/core';
import {Stylist} from '../../common';

@Component({
  selector: 'app-top-stylist-card',
  templateUrl: './top-stylist-card.component.html',
  styleUrls: ['./top-stylist-card.component.css']
})
export class TopStylistCardComponent implements OnInit {

  @Input() text: string;

  @Input() stylist: Stylist;

  constructor() {
  }

  ngOnInit() {

  }

}
