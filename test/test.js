const expect = require('chai').expect;

const sum = (n1, n2) => n1 + n2;

it('should sum for 2 and 3 equal 5', () => {
    expect(sum(2, 3)).to.equal(5)
});