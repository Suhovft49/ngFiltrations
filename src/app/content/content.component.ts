import {
  Component,
  OnInit,
  ViewEncapsulation,
  EventEmitter,
  Output } from '@angular/core';
import { HttpService} from '../serv/http.service';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [HttpService],
  encapsulation: ViewEncapsulation.None
})
export class ContentComponent implements OnInit {
  @Output() changedItemsNumber = new EventEmitter<number>();
  error: string;
  contentArray: any;
  filters: any;

  constructor(private httpService: HttpService, private settingsService: SettingsService) {
    // rxjs subscriber
    this.settingsService.catchSetting().subscribe(filters => {
      this.filters = filters;
      this.getItems(filters);
    });
  }

  ngOnInit() {
    this.getFilters();
    this.getItems();
  }

  getFilters() {
    this.settingsService
      .getSettings()
      .then((res) => {
        this.filters = res.data;
      })
      .catch(error => this.error = error);
  }

  getItems(filters?: any) {
    this.httpService
      .getContent(filters)
      .then((resp) => {
        this.contentArray = resp.data;
        this.changedItemsNumber.emit(resp.data.length);
      })
      .catch(error => this.error = error);
  }
}
