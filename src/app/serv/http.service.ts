import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
  private contentUrl = 'app/content';  // URL to content object

  constructor(private http: HttpClient) {}

  getContent(filters: any): Promise<any> {
    const url = filters ? this.createFilteredURL(filters) : this.contentUrl;
    return this.http
      .get(url)
      .toPromise()
      .then((response) => response)
      .catch(this.handleError);
  }

  createFilteredURL(filters: any): string {
    // .get(`app/content?quality=2&syntax=xml`)
    const params = [];

    filters.forEach((filter) => {
      filter.filterList.forEach((item) => {
        if (item.value) {
          params.push(`${filter.id}=${item.id}`);
        }
      });
    });
    return `${this.contentUrl}?${params.join('&')}`;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.body.error || error);
  }
}
