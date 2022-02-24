const Employee = require('../lib/employee.js')

describe('Employee Class', () => {
    describe('Initialization', () => {
        it('Should create an object with an id and name', () => {
            const employee = new Employee(123, 'Name')

            expect(employee.id).toEqual(123);
            expect(employee.name).toEqual('Name');
        });
    });
});