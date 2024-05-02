import {calculateRelativeDate} from './relative-date';
import { expect } from '@open-wc/testing';

describe('Calculate Relative Date', () => {
  it('Today', () => {
    const input  = new Date();
    const expected = 'Today';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });
  it('Should return Yesterday', () => {
    const input  = new Date();
    input.setDate(input.getDate() - 1);
    const expected = 'Yesterday';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });
  it('Should return This week', () => {
    const input  = new Date();
    input.setDate(input.getDate() - 3);
    const expected = 'This week';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });
});
