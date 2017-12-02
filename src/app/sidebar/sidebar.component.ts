import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpService} from '../serv/http.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [HttpService],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

  filtersArray: any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService
      .getData('./assets/json/products-filters.json')
      .subscribe((data: any) => this.filtersArray = data['filtersArray']);
  }

}
