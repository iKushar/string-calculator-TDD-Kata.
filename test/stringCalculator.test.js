import { expect } from 'chai';
import {Add} from '../index.js';

describe('String Calculator', () => {
    it('should return 0 for an empty string', () => {
        expect(Add("")).to.equal(0);
    });
    it('return value of a single number', () => {
        expect(Add("1")).to.equal(1);
    });
});