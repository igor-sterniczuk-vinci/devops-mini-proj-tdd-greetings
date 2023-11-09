function isEmptyNullOrWhitespace(name) {
  return name === null || name === undefined || name === "";
}



function greeting(name) {
  if (isEmptyNullOrWhitespace(name)) {
    return "Hello, my friend.";
  }
  return `Hello, ${name}.`;
}

module.exports = greeting;
