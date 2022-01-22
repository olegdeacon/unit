const expect = require('chai').expect;
const product = require('../prod')

describe('PRODUCT', () => {
    it('should calculate product of three numbers', () => {
        expect(product(2, 3, 4)).eq(24)
    });
    it('should return product of two numbers', () => {
        expect(product(-3, -5,)).eq(0)
    });
    it('should return product of one number', () => {
        expect(product(15)).eq(0)
    });
    it('should return product of no numbers', () => {
        expect(product()).eq(0)
    });
    it('should calculate product of three numbers', () => {
        expect(product(5, -3, 14)).eq(-210)
    });
});