const expect = require('chai').expect;
const countOfNumbers = require('../countOfNumbers')

describe('SUM OF NEGATIVE', () => {
    it('should return elements containing numbers', () => {
        expect(countOfNumbers([2, 'a', 5, true, 'b', 1, 'c'])).eq(3)
    });
    it('should return elements containing numbers', () => {
        expect(countOfNumbers([-2, 'eve', 3,'wqe'])).eq(2)
    });
    it('should return elements containing numbers', () => {
        expect(countOfNumbers([3, 5])).eq(2)
    });
    it('should return 0 if no numbers', () => {
        expect(countOfNumbers(['stpo', 'true', 'abc'])).eq(0)
    });
    it('should return 0 if empty array', () => {
        expect(countOfNumbers([])).eq(0)
    });
});