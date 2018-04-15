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
    // .get(`app/content?quality=2&syntax=xml`) // use & for few filters
    // .get(`app/content?id=[0,1]`) // use [] for few filters from one category
    // .get(`app/content?syntax=json$`) // use $ for strict searching
    // .get(`app/content?syntax=^j`) // use ^ to find starts from j or J
    const params = [];

    filters.forEach((filter) => {
      const filtersArr = [];
      filter.filterList.forEach((item) => {
        if (item.value) {
          filtersArr.push(`${item.id}`);
        }
      });
      if (filtersArr.length) {
        params.push(`${filter.id}=[${filtersArr.join(',')}]$`);
      }
    });
    return `${this.contentUrl}?${params.join('&')}`;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.body.error || error);
  }
}
