import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {
  @Input() isOpened: boolean;
  error: string;
  filtersArray: any;

  constructor(private settingsService: SettingsService) {}

  ngOnInit() {
    this.getFilters();
  }

  getFilters() {
    this.settingsService
      .getSettings()
      .then((res) => {
        this.filtersArray = res.data;
      })
      .catch(error => this.error = error);
  }

  saveFilters(): void {
    // waiting timeout to filters model update
    setTimeout(() => {
      this.settingsService.sendSetting(this.filtersArray);
    }, 0);
  }

}
