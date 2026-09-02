import { add } from './add';

describe('add', () => {
  it('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('handles negative numbers', () => {
    expect(add(-2, 1)).toBe(-1);
  });
});
