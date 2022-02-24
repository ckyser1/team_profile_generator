const Manager = require('../lib/manager.js')

describe('Manager Class', () => {
    describe('Initialization', () => {
        it('Should create an object with an id and name', () => {
            const manager = new Manager(123, 'Name')

            expect(manager.id).toEqual(123);
            expect(manager.name).toEqual('Name');
        });
    });
});