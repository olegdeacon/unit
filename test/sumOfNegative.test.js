const expect = require('chai').expect;
const sumOfNegativeTest = require('../sumOfNegative')

describe('SUM OF NEGATIVE', () => {
    it('should return sum of negative', () => {
        expect(sumOfNegativeTest([-5, -3, 14, -15])).eq(-23)
    });
    it('should return sum of negative', () => {
        expect(sumOfNegativeTest([-2, 3, -4])).eq(-6)
    });
    it('should return sum of negative', () => {
        expect(sumOfNegativeTest([14, -8 ,36, -7 ,-32])).eq(-47)
    });
    it('should return 0 if no negative numbers', () => {
        expect(sumOfNegativeTest([3, 5])).eq(0)
    });
    it('should return 0 for empty array', () => {
        expect(sumOfNegativeTest([])).eq(0)
    });
});