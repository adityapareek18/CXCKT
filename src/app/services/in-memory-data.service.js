"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var sessions = [
            { id: 0, name: 'Java8', desc: 'Fundamentals changes came with 8th edition of java' },
            { id: 11, name: 'Lambda Expression', desc: 'An important new feature of Java 8' },
            { id: 12, name: 'TypeScript', desc: 'Superset of JavaScript' },
            { id: 13, name: 'CakePhP', desc: 'Framework of PHP' },
            { id: 14, name: 'CodeIgniter', desc: 'Framework of PHP' },
            { id: 15, name: 'Angular4', desc: 'Front end design framework in JS' },
            { id: 16, name: 'Sass', desc: 'Framework for css' },
            { id: 17, name: 'CSS3', desc: 'New CSS3' },
            { id: 18, name: 'Finance and IT', desc: 'How tax is calculated' },
            { id: 19, name: '5500', desc: 'A new Product of CXC' },
            { id: 20, name: '401k', desc: 'ND Testing for Retirement plans' }
        ];
        return { sessions: sessions };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map