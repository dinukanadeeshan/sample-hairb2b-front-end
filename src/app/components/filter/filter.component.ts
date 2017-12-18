import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {JobRole, JobRoleFilter} from '../../common';
import {CommonService} from '../../services/common.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  job_roles: JobRole[] = [];
  job_role_filters: JobRoleFilter[] = [];
  valueOfSlider: number;
  maxSlider = 100;
  minDate: Date;
  maxDate: Date;
  fromDate: Date;
  toDate: Date;
  toggleCollapse = false;


  @Output() filterEvent = new EventEmitter();

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    this.commonService.getJobRoles().subscribe(data => {
      this.job_roles = data;
      this.job_role_filters = this.job_roles.map(val => {

        return {id: val.id, role: val.role, selected: false};
      });

    });

    this.valueOfSlider = this.maxSlider;
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setDate(this.minDate.getDate() + 35);
  }


  applyFilters() {
    console.log(this.job_role_filters);
    this.filterEvent.emit();
  }

  clearFilters() {
    this.job_role_filters = this.job_roles.map(val => {

      return {id: val.id, role: val.role, selected: false};
    });
    this.valueOfSlider = this.maxSlider;

  }
}
