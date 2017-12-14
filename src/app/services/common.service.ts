import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Skill} from '../common';

@Injectable()
export class CommonService {

  constructor(private http: HttpClient) {
  }

  getSampleSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>('/api/v1/common/getskills');
  }

  getImage(): Observable<Image> {
    return this.http.get<Image>('/api/v1/common/image');
  }


}

interface Image {
  img: any;
}
