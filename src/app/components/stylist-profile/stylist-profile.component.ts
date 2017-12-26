import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Stylist} from '../../common';
import {StylistService} from '../../services/stylist.service';
import {CommonService} from '../../services/common.service';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-stylist-profile',
  templateUrl: './stylist-profile.component.html',
  styleUrls: ['./stylist-profile.component.css']
})
export class StylistProfileComponent implements OnInit {


  stylist: Stylist;
  data_recieved = false;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

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
      busyDates: [],
      gallery: []
    };

    const id = +this.route.snapshot.paramMap.get('id');

    this.stylistService.getStylistProfile(id).subscribe(data => {
      console.log(data);
      this.stylist = data;
      this.galleryImages = this.stylist.gallery.map(value => {
        return {
          small: 'data:image/jpg;base64,' + value,
          medium: 'data:image/jpg;base64,' + value,
          big: 'data:image/jpg;base64,' + value
        };
      });
      this.data_recieved = true;
    });


    // console.log(this.stylist);
    // this.commonService.getImage().subscribe(data => {
    //   this.img = data.img;
    // });


    this.galleryOptions = [
      {
        width: '100%',
        height: '600px',
        thumbnailsColumns: 4,
        imageAnimation: 'zoom',
        imageAutoPlay: true,
        imageAutoPlayPauseOnHover: true, previewAutoPlay: true, previewAutoPlayPauseOnHover: true,
        imageArrowsAutoHide: true, thumbnailsArrowsAutoHide: true,
        previewCloseOnClick: true, previewCloseOnEsc: true
        // thumbnailsRemainingCount: true
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];


    console.log(this.stylist.gallery);


  }

}
