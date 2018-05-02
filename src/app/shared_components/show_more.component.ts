import {
  Component,
  Output,
  EventEmitter,
  Input } from '@angular/core';

@Component({
  selector: 'app-filters-list',
  template: `
    <ul>
      <ng-container *ngFor="let filter of itemsList; let i = index">
        <li *ngIf="i < canShow">
          <mat-checkbox color="primary"
                        [(ngModel)]="filter.value"
                        (click)="saveFilters()">{{ filter.name }}</mat-checkbox>
        </li>
      </ng-container>
    </ul>
    <span *ngIf="itemsList.length > minShown"
          [ngClass]="{'m-show-more-opened': canShow !== minShown}"
          class="show-more"
          (click)="showMore()">{{ canShow !== minShown ? less : more }}</span>
  `,
  styles: [`
    .show-more {
      position: relative;
      display: inline-block;
      padding-right: 26px;
      text-transform: uppercase;
      color: #005391;
      cursor: pointer;
    }
    .show-more:after,
    .show-more:before {
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      display: block;
      width: 12px;
      height: 2px;
      background: #005391;
    }
    .show-more:after {
      right: 7px;
      transform: rotate(45deg);
    }
    .show-more:before {
      transform: rotate(-45deg);
    }
    .m-show-more-opened.show-more:after {
      right: 7px;
      transform: rotate(-45deg);
    }
    .m-show-more-opened.show-more:before {
      transform: rotate(45deg);
    }
    .show-more:hover {
      font-weight: 500;
    }
  `]
})
export class FiltersListComponent {
  @Input() itemsList: Array<any>;
  @Output() filterSaved = new EventEmitter<any>();

  more = 'more';
  less = 'less';
  minShown = 4;
  canShow = this.minShown;

  showMore() {
    this.canShow = this.canShow === this.minShown ? this.itemsList.length : this.minShown;
  }

  saveFilters() {
    this.filterSaved.emit();
  }
}
