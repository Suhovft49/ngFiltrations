import { Component } from '@angular/core';

@Component({
  selector: 'app-show-more',
  template: `
    <ng-content></ng-content>
    <span class="show-more">more</span>
  `,
  styles: [`
    .show-more {
      text-transform: uppercase;
      color: #005391;
      cursor: pointer;
    }
    .show-more:hover {
      font-weight: 500;
    }
  `]
})
export class ShowMoreComponent {}
