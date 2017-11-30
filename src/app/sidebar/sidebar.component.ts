import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

  filtersArray: any = [
    {
      'filterName': 'Data Quality',
      'filterList': []
    },
    {
      'filterName': 'Payment',
      'filterList': ['Free', 'Pay Per Use', 'Pay Per Vol']
    },
    {
      'filterName': 'Semantics & syntax',
      'filterList': ['GS1', 'XML', 'RDF', 'JSON', 'JSONP']
    },
    {
      'filterName': 'Transmission',
      'filterList': ['MQTT', 'HTTP', 'HTTPS', 'Web-Services']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
