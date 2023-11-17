/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
const { test, expect } = require("@jest/globals");

const greet = require("./app");

// 1
test('should return "Hello name."', () => {
  const result = greet("Jean-Kevin");
  expect(result).toEqual("Hello, Jean-Kevin.");
});

// 2
test('should return "Hello, my friend."', () => {
  const result = greet(null);
  expect(result).toEqual("Hello, my friend.");
});

test('should return "Hello, my friend."', () => {
  const result = greet(undefined);
  expect(result).toEqual("Hello, my friend.");
});

test('should return "Hello, my friend."', () => {
  const result = greet("");
  expect(result).toEqual("Hello, my friend.");
});

// 3
test('should return "Hello, KENOBI!"', () => {
  const result = greet("KENOBI");
  expect(result).toEqual("HELLO, KENOBI!");
});

// 4
test('should return "Hello, Jill and Jane."', () => {
  const result = greet(["Jill", "Jane"]);
  expect(result).toEqual("Hello, Jill and Jane.");
});

// 5
test('should return "Hello, Kratos, Thanathos and Hypnos."', () => {
  const result = greet(["Kratos", "Thanathos", "Hypnos"]);
  expect(result).toEqual("Hello, Kratos, Thanathos and Hypnos.");
});
// 6
test('should return "Hello, Kratos and Hypnos. AND HELLO THANATHOS !"', () => {
  const result = greet(["Kratos", "THANATHOS", "Hypnos"]);
  expect(result).toEqual("Hello, Kratos and Hypnos. AND HELLO THANATHOS !");
});

test('should return "Hello, Thanathos and Hypnos. AND HELLO KRATOS !"', () => {
  const result = greet(["KRATOS", "Thanathos", "Hypnos"]);
  expect(result).toEqual("Hello, Thanathos and Hypnos. AND HELLO KRATOS !");
});
// 7
test('should return "Bonjour Kratos et Thanathos."', () => {
  const result = greet(["Kratos", "Thanathos", "fr"]);
  expect(result).toEqual("Bonjour Kratos et Thanathos.");
});
test('should return "Bonjour Thanathos et Kratos."', () => {
  const result = greet(["fr", "Thanathos", "Kratos"]);
  expect(result).toEqual("Bonjour Thanathos et Kratos.");
});
test('should return "Bonjour Thanathos et Kratos."', () => {
  const result = greet(["Thanathos", "fr", "Kratos"]);
  expect(result).toEqual("Bonjour Thanathos et Kratos.");
});
test('should return "Halo Thanathos en Kratos."', () => {
  const result = greet(["Thanathos", "nl", "Kratos"]);
  expect(result).toEqual("Halo Thanathos en Kratos.");
});
test('should return "Halo Thanathos en Kratos."', () => {
  const result = greet(["Thanathos", "Kratos", "nl"]);
  expect(result).toEqual("Halo Thanathos en Kratos.");
});
test('should return "Halo Kratos en Thanathos."', () => {
  const result = greet(["nl", "Kratos", "Thanathos"]);
  expect(result).toEqual("Halo Kratos en Thanathos.");
});
test('should return "Hello, Kratos and Hypnos. AND HELLO THANATHOS AND KRATOS !"', () => {
  const result = greet(["Kratos", "THANATHOS", "Hypnos", "KRATOS"]);
  expect(result).toEqual("Hello, Kratos and Hypnos. AND HELLO THANATHOS AND KRATOS !");
});
