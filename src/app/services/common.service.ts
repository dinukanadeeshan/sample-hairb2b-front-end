import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {JobRole, Skill} from '../common';

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

  getJobRoles(): Observable<JobRole[]> {
    return this.http.get<JobRole[]>('/api/v1/common/jobroles');
  }


}

interface Image {
  img: any;
}
