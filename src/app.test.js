/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
const { test, expect } = require("@jest/globals");

const greeting = require("./app");

// 1
test('should return "Hello name."', () => {
  const result = greeting("Jean-Kevin");
  expect(result).toEqual("Hello, Jean-Kevin.");
});

// 2
test('should return "Hello, my friend."', () => {
  const result = greeting(null);
  expect(result).toEqual("Hello, my friend.");
});

test('should return "Hello, my friend."', () => {
  const result = greeting(undefined);
  expect(result).toEqual("Hello, my friend.");
});

test('should return "Hello, my friend."', () => {
  const result = greeting("");
  expect(result).toEqual("Hello, my friend.");
});

// 3
test('should return "Hello, KENOBI!"', () => {
  const result = greeting("KENOBI");
  expect(result).toEqual("HELLO, KENOBI!");
});
