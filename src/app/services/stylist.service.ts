import {Injectable} from '@angular/core';
import {Stylist} from '../common';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

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

  getStylistProfile(id): Observable<Stylist> {
    return this.http.get<Stylist>('/api/v1/stylist/getstylist/' + id);
  }

  getStylistByName(name): Observable<Stylist[]> {
    return this.http.get<Stylist[]>('/api/v1/stylist/getstylistbyname/' + name);
  }

  getNames(): Observable<string[]> {
    return this.http.get<string[]>('/api/v1/stylist/getnames');
  }


}
