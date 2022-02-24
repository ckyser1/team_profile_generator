const Intern = require('../lib/intern.js')

describe('Intern Class', () => {
    describe('Initialization', () => {
        it('Should create an object with an id and name', () => {
            const intern = new Intern(123, 'Name')

            expect(intern.id).toEqual(123);
            expect(intern.name).toEqual('Name');
        });
    });
});