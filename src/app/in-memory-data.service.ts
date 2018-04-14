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
            'id': 'free',
            'name': 'Free',
            'value': false
          },
          {
            'id': 'ppuse',
            'name': 'Pay Per Use',
            'value': false
          },
          {
            'id': 'ppvol',
            'name': 'Pay Per Vol',
            'value': false
          }]
      },
      {
        'id': 'syntax',
        'filterName': 'Semantics & syntax',
        'filterList': [
          {
            'id': 'gs1',
            'name': 'GS1',
            'value': false
          },
          {
            'id': 'xml',
            'name': 'XML',
            'value': false
          },
          {
            'id': 'rdf',
            'name': 'RDF',
            'value': false
          },
          {
            'id': 'json',
            'name': 'JSON',
            'value': false
          },
          {
            'id': 'jsonp',
            'name': 'JSONP',
            'value': false
          },
          {
            'id': 'xhtml',
            'name': 'XHTML',
            'value': false
          },
          {
            'id': 'html',
            'name': 'HTML',
            'value': false
          }]
      },
      {
        'id': 'transmission',
        'filterName': 'Transmission',
        'filterList': [
          {
            'id': 'mqtt',
            'name': 'MQTT',
            'value': false
          },
          {
            'id': 'http',
            'name': 'HTTP',
            'value': false
          },
          {
            'id': 'https',
            'name': 'HTTPS',
            'value': false
          },
          {
            'id': 'webs',
            'name': 'Web-Services',
            'value': false
          }]
      }
    ];

    const content = [
      {
        'id': 0,
        'name': 'Weather Feed Germany',
        // params:id: filtersList:id
        'quality': 2,
        'payment': 'free',
        'transmission': 'http',
        'syntax': 'xml',
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
        'payment': 'free',
        'transmission': 'https',
        'syntax': 'xml',
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
        'payment': 'ppvol',
        'transmission': 'http',
        'syntax': 'json',
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
        'payment': 'free',
        'transmission': 'http',
        'syntax': 'json',
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
        'payment': 'ppvol',
        'transmission': 'mqtt',
        'syntax': 'jsonp',
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
        'payment': 'ppuse',
        'transmission': 'http',
        'syntax': 'rdf',
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

