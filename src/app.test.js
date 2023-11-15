/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
const { test, expect } = require("@jest/globals");

const greeting = require("./app");

// 1
test('should return "Hello Jean-Kevin."', () => {
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
test('should return "Hello, Kratos and Hypnos. AND HELLO THANATHOS !"', () => {
  const result = greeting(["Kratos", "THANATHOS", "Hypnos"]);
  expect(result).toEqual("Hello, Kratos and Hypnos. AND HELLO THANATHOS !");
});

test('should return "Hello, Thanathos and Hypnos. AND HELLO KRATOS !"', () => {
  const result = greeting(["KRATOS", "Thanathos", "Hypnos"]);
  expect(result).toEqual("Hello, Thanathos and Hypnos. AND HELLO KRATOS !");
});
// 7
test('should return "Bonjour Kratos et Thanathos."', () => {
  const result = greeting(["Kratos", "Thanathos", "fr"]);
  expect(result).toEqual("Bonjour Kratos et Thanathos.");
});
test('should return "Bonjour Thanathos et Kratos."', () => {
  const result = greeting(["fr", "Thanathos", "Kratos"]);
  expect(result).toEqual("Bonjour Thanathos et Kratos.");
});
test('should return "Bonjour Thanathos et Kratos."', () => {
  const result = greeting(["Thanathos", "fr", "Kratos"]);
  expect(result).toEqual("Bonjour Thanathos et Kratos.");
});
test('should return "Halo Thanathos en Kratos."', () => {
  const result = greeting(["Thanathos", "nl", "Kratos"]);
  expect(result).toEqual("Halo Thanathos en Kratos.");
});
test('should return "Halo Thanathos en Kratos."', () => {
  const result = greeting(["Thanathos", "Kratos", "nl"]);
  expect(result).toEqual("Halo Thanathos en Kratos.");
});
