const Engineer = require('../lib/engineer.js')

describe('Engineer Class', () => {
    describe('Initialization', () => {
        it('Should create an object with an id and name', () => {
            const engineer = new Engineer(123, 'Name')

            expect(engineer.id).toEqual(123);
            expect(engineer.name).toEqual('Name');
        });
    });
});