const expect = require('chai').expect;
const avgOfArray = require('../avg')

describe('AVERAGE', () => {
    it('should calculate average for array of positives', () => {
        expect(avgOfArray([2, 3, 5, 9, 2, 6])).eq(4.5)
    });

    it('should calculate average for array of neg', () => {
        expect(avgOfArray([-2, -3, -5, -9, -2, -6])).eq(-4.5)
    });

    it('should return 0 for empty array', () => {
        expect(avgOfArray([])).eq(0)
    });

    it('should return 0 for without arg', () => {
        expect(avgOfArray()).eq(0)
    });

    it('should return 0 if arg NULL', () => {
        expect(avgOfArray([null])).eq(0)
    });
});