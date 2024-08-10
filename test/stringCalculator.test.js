import { expect } from 'chai';
import {Add} from '../index.js';

describe('String Calculator', () => {
    it('should return 0 for an empty string', () => {
        expect(Add("")).to.equal(0);
    });
    it('return value of a single number', () => {
        expect(Add("1")).to.equal(1);
    });
    it('sum of multiple numbers with comma separated "1,2,3"', () => {
        expect(Add("1,2,3")).to.equal(6);
    });
    it("sum of numbers having newlines between numbers '1\\n2,3'", () => {
        expect(Add("1\n2,3")).to.equal(6);
    });
});