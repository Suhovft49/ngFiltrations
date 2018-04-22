import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SettingsService {
  private settingsUrl = 'app/settings';  // URL to settings object
  private subject = new Subject<any>();

  constructor(private http: HttpClient) {}

  // rxjs Subscriber parts
  sendSetting(settings: any) {
    this.subject.next(settings);
  }
  catchSetting(): Observable<any> {
    return this.subject.asObservable();
  }

  getSettings(): Promise<any> {
    return this.http
      .get(this.settingsUrl)
      .toPromise()
      .then((response) => response)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.body.error || error);
  }
}
