import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const settings = [
      // {
      //   'id': 'quality',
      //   'filterName': 'Data Quality',
      //   'filterList': [
      //     {
      //       'name': 'quality',
      //       'value': 4
      //     }]
      // },
      {
        'id': 'payment',
        'filterName': 'Payment',
        'filterList': [
          {
            'name': 'Free',
            'value': true
          },
          {
            'name': 'Pay Per Use',
            'value': true
          },
          {
            'name': 'Pay Per Vol',
            'value': false
          }]
      },
      {
        'id': 'syntax',
        'filterName': 'Semantics & syntax',
        'filterList': [
          {
            'name': 'GS1',
            'value': false
          },
          {
            'name': 'XML',
            'value': false
          },
          {
            'name': 'RDF',
            'value': false
          },
          {
            'name': 'JSON',
            'value': false
          },
          {
            'name': 'JSONP',
            'value': false
          },
          {
            'name': 'XHTML',
            'value': false
          },
          {
            'name': 'HTML',
            'value': false
          }]
      },
      {
        'id': 'transmission',
        'filterName': 'Transmission',
        'filterList': [
          {
            'name': 'MQTT',
            'value': false
          },
          {
            'name': 'HTTP',
            'value': false
          },
          {
            'name': 'HTTPS',
            'value': false
          },
          {
            'name': 'Web-Services',
            'value': false
          }]
      }
    ];

    const content = [
      {
        'id': 0,
        'name': 'Weather Feed Germany',
        'quality': 2,
        'description': 'Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet',
        'params': [
          {
            'name': 'Domain',
            'curVal': 'Health'
          },
          {
            'name': 'Region',
            'curVal': 'Deutshland'
          },
          {
            'name': 'Data-type',
            'curVal': 'XML'
          }
        ],
        'img': './assets/img/graf.png',
        'logoImg': './assets/img/DB-Bahn.png',
        'price': 19,
        'currency': '€'
      },
      {
        'id': 1,
        'name': 'Weather Feed Germany',
        'quality': 4,
        'description': 'Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet',
        'params': [
          {
            'name': 'Domain',
            'curVal': 'Health'
          },
          {
            'name': 'Region',
            'curVal': 'Deutshland'
          },
          {
            'name': 'Data-type',
            'curVal': 'XML'
          }
        ],
        'img': './assets/img/graf.png',
        'logoImg': './assets/img/DB-Bahn.png',
        'price': 19,
        'currency': '€'
      },
      {
        'id': 2,
        'name': 'Weather Feed Germany',
        'quality': 2,
        'description': 'Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet',
        'params': [
          {
            'name': 'Domain',
            'curVal': 'Health'
          },
          {
            'name': 'Region',
            'curVal': 'Deutshland'
          },
          {
            'name': 'Data-type',
            'curVal': 'JSON'
          }
        ],
        'img': './assets/img/graf.png',
        'logoImg': './assets/img/DB-Bahn.png',
        'price': 19,
        'currency': '€'
      },
      {
        'id': 3,
        'name': 'Weather Feed Germany',
        'quality': 4,
        'description': 'Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet',
        'params': [
          {
            'name': 'Domain',
            'curVal': 'Health'
          },
          {
            'name': 'Region',
            'curVal': 'Deutshland'
          },
          {
            'name': 'Data-type',
            'curVal': 'JSON'
          }
        ],
        'img': './assets/img/graf.png',
        'logoImg': './assets/img/DB-Bahn.png',
        'price': 19,
        'currency': '€'
      },
      {
        'id': 4,
        'name': 'Weather Feed Germany',
        'quality': 4,
        'description': 'Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet',
        'params': [
          {
            'name': 'Domain',
            'curVal': 'Health'
          },
          {
            'name': 'Region',
            'curVal': 'Deutshland'
          },
          {
            'name': 'Data-type',
            'curVal': 'JSON'
          }
        ],
        'img': './assets/img/graf.png',
        'logoImg': './assets/img/DB-Bahn.png',
        'price': 19,
        'currency': '€'
      },
      {
        'id': 5,
        'name': 'Weather Feed Germany',
        'quality': 4,
        'description': 'Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet',
        'params': [
          {
            'name': 'Domain',
            'curVal': 'Health'
          },
          {
            'name': 'Region',
            'curVal': 'Deutshland'
          },
          {
            'name': 'Data-type',
            'curVal': 'RDF'
          }
        ],
        'img': './assets/img/graf.png',
        'logoImg': './assets/img/DB-Bahn.png',
        'price': 19,
        'currency': '€'
      }
    ];

    return { content, settings };
  }
}

