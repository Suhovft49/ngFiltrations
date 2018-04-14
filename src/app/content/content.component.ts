import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpService} from '../serv/http.service';
import { SettingsService } from '../settings.service';
// import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [HttpService],
  encapsulation: ViewEncapsulation.None
})
export class ContentComponent implements OnInit {
  error: string;
  contentArray: any;
  filters: any;

  constructor(private httpService: HttpService, private settingsService: SettingsService) {
    // rxjs subscriber
    this.settingsService.catchSetting().subscribe(filters => {
      this.filters = filters;
    });
  }

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
