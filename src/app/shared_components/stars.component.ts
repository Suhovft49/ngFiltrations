import {
  Component,
  Input,
  EventEmitter,
  Output } from '@angular/core';

@Component({
  selector: 'app-stars',
  template: `
    <div class="stars">
      <label *ngFor="let qualification of qualifications"
             class="stars__label"
             [ngClass]="{'checked': qualification.id <= current.id}">
        <input type="checkbox"
               [name]="qualification.name"
               class="stars__input"
               (click)="setQualification(qualification)" />
      </label>
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
      margin: 5px;
      background-position: 50% 50%;
      background-image: url(../../assets/img/star_p_ico.svg);
      background-repeat: no-repeat;
      cursor: pointer;
    }
    .stars__label:hover {
      opacity: .7;
    }
    .stars__label.checked {
      background-image: url(../../assets/img/star_ico.svg);
    }
    .stars__input {
      display: none;
    }
  `]
})
export class StarsComponent {
  @Input() qualifications: any;
  @Input() current: any;
  @Output() onChanged = new EventEmitter<any>();

  constructor() { }

  setQualification(qualification) {
    this.current.id = qualification.id;
    this.onChanged.emit();
  }
}
