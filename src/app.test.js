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

// 4
test('should return "Hello, Jill and Jane."', () => {
  const result = greeting(["Jill", "Jane"]);
  expect(result).toEqual("Hello, Jill and Jane.");
});

// 5
test('should return "Hello, Kratos, Thanathos and Hypnos."', () => {
  const result = greeting(["Kratos", "Thanathos", "Hypnos"]);
  expect(result).toEqual("Hello, Kratos, Thanathos and Hypnos.");
});
// 6
test('should return "Hello, Kratos and Hypnos. AND HELLO BRIAN !"', () => {
  const result = greeting(["Kratos", "THANATHOS", "Hypnos"]);
  expect(result).toEqual("Hello, Kratos and Hypnos. AND HELLO BRIAN !");
});