import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
  private contentUrl = 'app/content';  // URL to content object

  constructor(private http: HttpClient) {}

  getContent(): Promise<any> {
    return this.http
      // .get(`app/content?quality=2&id=2`)
      .get(`app/content?payment=Free`)
      .toPromise()
      .then((response) => response)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.body.error || error);
  }
}
