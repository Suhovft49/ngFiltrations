import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const settings = [
      {
        'id': 'quality',
        'current': {'id': 0},
        'filterName': 'Data Quality',
        'filterList': [
          {
            'id': 1,
            'name': 'st1'
          },
          {
            'id': 2,
            'name': 'st2'
          },
          {
            'id': 3,
            'name': 'st3'
          },
          {
            'id': 4,
            'name': 'st4'
          },
          {
            'id': 5,
            'name': 'st5'
          }]
      },
      {
        'id': 'payment',
        'filterName': 'Payment',
        'filterList': [
          {
            'id': 'free1',
            'name': 'Free',
            'value': false
          },
          {
            'id': 'ppuse2',
            'name': 'Pay Per Use',
            'value': false
          },
          {
            'id': 'ppvol3',
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
            'id': 'xml2',
            'name': 'XML',
            'value': false
          },
          {
            'id': 'rdf3',
            'name': 'RDF',
            'value': false
          },
          {
            'id': 'json4',
            'name': 'JSON',
            'value': false
          },
          {
            'id': 'jsonp5',
            'name': 'JSONP',
            'value': false
          },
          {
            'id': 'xhtm6',
            'name': 'XHTML',
            'value': false
          },
          {
            'id': 'html7',
            'name': 'HTML',
            'value': false
          }]
      },
      {
        'id': 'transmission',
        'filterName': 'Transmission',
        'filterList': [
          {
            'id': 'mqtt1',
            'name': 'MQTT',
            'value': false
          },
          {
            'id': 'http2',
            'name': 'HTTP',
            'value': false
          },
          {
            'id': 'https3',
            'name': 'HTTPS',
            'value': false
          },
          {
            'id': 'webs4',
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
        'payment': 'free1',
        'transmission': 'http2',
        'syntax': 'xml2',
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
        'payment': 'free1',
        'transmission': 'https3',
        'syntax': 'xml2',
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
        'payment': 'ppvol3',
        'transmission': 'http2',
        'syntax': 'json4',
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
        'price': 10,
        'currency': '€'
      },
      {
        'id': 3,
        'name': 'Weather Feed Germany',
        'quality': 4,
        'payment': 'free1',
        'transmission': 'http2',
        'syntax': 'json4',
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
        'price': 193,
        'currency': '€'
      },
      {
        'id': 4,
        'name': 'Weather Feed Germany',
        'quality': 3,
        'payment': 'ppvol3',
        'transmission': 'mqtt1',
        'syntax': 'jsonp5',
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
        'price': 149,
        'currency': '€'
      },
      {
        'id': 5,
        'name': 'Weather Feed Germany',
        'quality': 1,
        'payment': 'ppuse2',
        'transmission': 'http2',
        'syntax': 'rdf3',
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
        'price': 15,
        'currency': '€'
      },
      {
        'id': 6,
        'name': 'Weather Feed Germany',
        'quality': 2,
        'payment': 'free1',
        'transmission': 'http2',
        'syntax': 'xml2',
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
        'id': 7,
        'name': 'Weather Germany',
        'quality': 5,
        'payment': 'free1',
        'transmission': 'http2',
        'syntax': 'xhtm6',
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
            'value': 'XHTML'
          }
        ],
        'img': './assets/img/graf.png',
        'logoImg': './assets/img/DB-Bahn.png',
        'price': 190,
        'currency': '€'
      }
    ];

    return { content, settings };
  }
}

