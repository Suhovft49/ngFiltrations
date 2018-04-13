import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {
  @Input() isOpened: boolean;

  filtersArray: any;

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.getfilters();
  }

  getfilters() {
    this.settingsService
      .getSettings()
      .then((data) => {
        this.filtersArray = data;
      })
      .catch(error => this.error = error);
  }

}
