import {
  Component,
  OnInit,
  ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {
  isOpened: boolean;
  selectedSorting: string;
  itemsNumber: number;

  sorts = [
    {value: 'asc', viewValue: 'Price asc'},
    {value: 'desc', viewValue: 'Price desc'},
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
