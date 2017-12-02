import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpService} from '../serv/http.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [HttpService],
  encapsulation: ViewEncapsulation.None
})
export class ContentComponent implements OnInit {

  contentArray: any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService
      .getData('./assets/json/products.json')
      .subscribe((data: any) => this.contentArray = data['contentArray']);
  }

}
