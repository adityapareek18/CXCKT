import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const sessions = [
      { id: 0,  name: 'Java8', desc: 'Fundamentals changes came with 8th edition of java', ddate:'2017-09-14T18:30:00.000Z'},
      { id: 11, name: 'Lambda Expression',desc: 'An important new feature of Java 8', ddate:'2017-09-14T18:30:00.000Z' },
      { id: 12, name: 'TypeScript', desc:'Superset of JavaScript', ddate:'2017-09-14T18:30:00.000Z'},
      { id: 13, name: 'CakePhP', desc:'Framework of PHP',ddate:'2017-09-14T18:30:00.000Z'},
      { id: 14, name: 'CodeIgniter', desc:'Framework of PHP',ddate:'2017-09-14T18:30:00.000Z' },
      { id: 15, name: 'Angular4', desc:'Front end design framework in JS',ddate:'2017-09-14T18:30:00.000Z' },
      { id: 16, name: 'Sass', desc:'Framework for css',ddate:'2017-09-14T18:30:00.000Z' },
      { id: 17, name: 'CSS3', desc:'New CSS3',ddate:'2017-09-14T18:30:00.000Z' },
      { id: 18, name: 'Finance and IT', desc:'How tax is calculated',ddate:'2017-09-14T18:30:00.000Z' },
      { id: 19, name: '5500', desc:'A new Product of CXC',ddate:'2017-09-14T18:30:00.000Z' },
      { id: 20, name: '401k', desc:'ND Testing for Retirement plans',ddate:'2017-09-14T18:30:00.000Z' }
    ];
    return {sessions};
  }
}
