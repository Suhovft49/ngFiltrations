import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContentComponent implements OnInit {

  contentArray: any = [
    {
      'name': 'Weather Feed Germany',
      'quality': 4,
      'description': 'Lorem ipsum dotor sit ammet',
      'domain': 'Health',
      'region': 'Deutshland',
      'img': './assets/img/graf.png',
      'dataType': 'JSON',
      'logoImg': './assets/img/DB-Bahn.png',
      'price': 19,
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
