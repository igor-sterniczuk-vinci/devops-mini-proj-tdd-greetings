// eslint-disable-next-line import/no-extraneous-dependencies
import { test, expect } from '@jest/globals';

import greeting from './app';

test('should return "Hello name"', () => {
  const result = greeting('Jean-Kevin');
  expect(result).toEqual('Hello, Jean-Kevin.');
});
