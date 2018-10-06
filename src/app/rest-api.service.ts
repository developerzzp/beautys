import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Subject } from 'rxjs';

@Injectable()
export class RestApiService {
  static host = '/api/label';
  constructor(private http: Http) {
  }
  getHeaders (): Headers {
    const header = new Headers();
    header.append('Accept', 'application/json');
    header.append('Content-Type', 'application/json');
    return header;
  }
  postSpendMoneyInformation (template): Promise<any> {
    const url = RestApiService.host + '/rest_api/print/';
    return this.http.post(url, template, {headers: this.getHeaders()})
        .toPromise()
        .then(response => response.json())
        .catch(err => {
          console.log(err);
          return Promise.reject(err);
        });
  }

}
