import {Injectable} from '@angular/core';
import {Stylist} from '../common';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class StylistService {

  constructor(private http: HttpClient) {
  }

  getSampleStylists(): Observable<Stylist[]> {
    return this.http.get<Stylist[]>('/api/v1/stylist/getsamples');
  }

  getSampleStylistProfile(): Observable<Stylist> {
    return this.http.get<Stylist>('/api/v1/stylist/getsample');
  }

}
