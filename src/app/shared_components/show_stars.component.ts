import {
  Component,
  Input } from '@angular/core';

@Component({
  selector: 'app-show-stars',
  template: `
    <div class="stars">
      <div *ngFor="let qualification of qualifications"
           class="stars__label"
           [ngClass]="{'checked': qualification.id <= current}">
      </div>
    </div>
  `,
  styles: [`
    .stars {
      display: block;
    }
    .stars__label {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin: 0 5px;
      background-position: 50% 50%;
      background-image: url(../../assets/img/star_p_ico.svg);
      background-repeat: no-repeat;
    }
    .stars__label.checked {
      background-image: url(../../assets/img/star_ico.svg);
    }
  `]
})
export class ShowStarsComponent {
  @Input() qualifications: any;
  @Input() current: any;
}
