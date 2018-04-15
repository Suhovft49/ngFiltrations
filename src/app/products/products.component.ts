import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {
  isOpened: boolean;
  itemsNumber: number;

  sorts = [
    {value: 'ask', viewValue: 'Ask'},
    {value: 'desk', viewValue: 'Desk'},
  ];

  constructor() {}

  ngOnInit() {
    this.isOpened = true;
  }

  openSidenav() {
    this.isOpened = !this.isOpened;
  }

  onChangedItemsNumber(itemsNumber: number): void {
    this.itemsNumber = itemsNumber;
  }

}
