import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-stylists',
  templateUrl: './top-stylists.component.html',
  styleUrls: ['./top-stylists.component.css']
})
export class TopStylistsComponent implements OnInit {

  slides = [
    {img: 'http://placehold.it/350x150/000000'},
    {img: 'http://placehold.it/350x150/111111'},
    {img: 'http://placehold.it/350x150/333333'},
    {img: 'http://placehold.it/350x150/666666'}
  ];
  slideConfig = {'slidesToShow': 3, 'slidesToScroll': 1};

  constructor() {
  }

  afterChange(e) {
    console.log('afterChange');
  }

  ngOnInit() {
  }

}
