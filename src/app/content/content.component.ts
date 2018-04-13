import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpService} from '../serv/http.service';
// import 'rxjs/add/operator/filter';

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
    // this.getItems();
  }

  getItems() {
    this.httpService
      .getContent()
      .then((data) => {
        console.log(data);
      })
      .catch(error => this.error = error);
  }
}
