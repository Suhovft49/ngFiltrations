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

  sendSetting(message: any) {
    this.subject.next(message);
  }

  catchSetting(): Observable<any> {
    return this.subject.asObservable();
  }

  getSettings(): Promise<Array> {
    return this.http
      .get(this.settingsUrl)
      .toPromise()
      .then((response) => response.data as [])
      .catch(this.handleError);
  }

  setSettings(settings: any) {
    return this.putSetting(settings);
  }

  private putSetting(settings: any): Promise<any> {
    const url = `${this.settingsUrl}/${settings.id}`;
    return this.http
      .post(url, settings)
      .toPromise();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.body.error || error);
  }
}
