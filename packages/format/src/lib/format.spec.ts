import { format } from './format.js';

describe('vitest', () => {
  it('is configured and working', () => {
    expect(true).toBe(true);
  });
});

describe('format', () => {
  it('formats a message', () => {
    expect(format('foo')).toEqual(`Hello, foo!\r\nHi, foo!\r\nHowdy, foo!\r\n`);
  });
});
