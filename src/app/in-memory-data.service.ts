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
            'value': false
          },
          {
            'name': 'Pay Per Use',
            'value': false
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
        'payment': 'Free',
        'transmission': 'HTTP',
        'syntax': 'XML',
        'description': 'Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet',
        'params': [
          {
            'id': 'payment',
            'name': 'Payment',
            'value': 'Free'
          },
          {
            'id': 'transmission',
            'name': 'Transmission',
            'value': 'HTTP'
          },
          {
            'id': 'syntax',
            'name': 'Syntax',
            'value': 'XML'
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
        'payment': 'Free',
        'transmission': 'HTTPS',
        'syntax': 'XML',
        'description': 'Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet',
        'params': [
          {
            'id': 'payment',
            'name': 'Payment',
            'value': 'Free'
          },
          {
            'id': 'transmission',
            'name': 'Transmission',
            'value': 'HTTPS'
          },
          {
            'id': 'syntax',
            'name': 'Syntax',
            'value': 'XML'
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
        'payment': 'Pay Per Vol',
        'transmission': 'HTTP',
        'syntax': 'JSON',
        'description': 'Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet',
        'params': [
          {
            'id': 'payment',
            'name': 'Payment',
            'value': 'Pay Per Vol'
          },
          {
            'id': 'transmission',
            'name': 'Transmission',
            'value': 'HTTP'
          },
          {
            'id': 'syntax',
            'name': 'Syntax',
            'value': 'JSON'
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
        'payment': 'Free',
        'transmission': 'HTTP',
        'syntax': 'JSON',
        'description': 'Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet',
        'params': [
          {
            'id': 'payment',
            'name': 'Payment',
            'value': 'Free'
          },
          {
            'id': 'transmission',
            'name': 'Transmission',
            'value': 'HTTP'
          },
          {
            'id': 'syntax',
            'name': 'Syntax',
            'value': 'JSON'
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
        'quality': 3,
        'payment': 'Pay Per Vol',
        'transmission': 'MQTT',
        'syntax': 'JSONP',
        'description': 'Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet',
        'params': [
          {
            'id': 'payment',
            'name': 'Payment',
            'value': 'Pay Per Vol'
          },
          {
            'id': 'transmission',
            'name': 'Transmission',
            'value': 'MQTT'
          },
          {
            'id': 'syntax',
            'name': 'Syntax',
            'value': 'JSONP'
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
        'quality': 1,
        'payment': 'Pay Per Use',
        'transmission': 'HTTP',
        'syntax': 'RDF',
        'description': 'Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet Lorem ipsum dotor sit ammet',
        'params': [
          {
            'id': 'payment',
            'name': 'Payment',
            'value': 'Pay Per Use'
          },
          {
            'id': 'transmission',
            'name': 'Transmission',
            'value': 'HTTP'
          },
          {
            'id': 'syntax',
            'name': 'Syntax',
            'value': 'RDF'
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

