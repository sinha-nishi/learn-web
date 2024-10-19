import { expect } from 'chai';
import { Prime, printTopPrimes } from '../prime.js';


describe('Prime Number Test', () => {
    it('3 is prime', () => {
        let result = Prime(3);
        expect(result).to.be.true;
    })
    it('13 is prime', () => {
        let result = Prime(13);
        expect(result).to.be.true;
    })
    it('9 is not prime', () => {
        let result = Prime(9);
        expect(result).to.be.false;
    })
    it('17 is prime', () => {
        let result = Prime(17);
        expect(result).to.be.true;
    })
    it('20 is not prime', () => {
        let result = Prime(20);
        expect(result).to.be.false;
    })
   it ('22 is not prime', () => {
        let result = Prime(22);
        expect(result).to.be.false;
    })
   it ('1003 is not prime', () => {
        let result = Prime(1003);
        expect(result).to.be.false;
    })
});

describe("Top N Primes", () => {
    it('should return 5 primes', () => {
        const result = printTopPrimes(5);
        expect(result).to.eql([1,2,3,5,7])
    })
})