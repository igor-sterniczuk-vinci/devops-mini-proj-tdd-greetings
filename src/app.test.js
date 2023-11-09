/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
const { test, expect } = require('@jest/globals');

const greeting = require('./app');

test('should return "Hello name"', () => {
  const result = greeting('Jean-Kevin');
  expect(result).toEqual('Hello, Jean-Kevin.');
});
