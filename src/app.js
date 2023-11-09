function isEmptyNullOrWhitespace(name) {
  return name === null || name === undefined || name === "";
}

function isCapitalLettersOnly(name) {
  return name === name.toUpperCase();
}


function greeting(name) {
  if (isEmptyNullOrWhitespace(name)) {
    return "Hello, my friend.";
  }
  if (Array.isArray(name)) {
    let stringToReturn = 'Hello, ';
    name.forEach((n, index) => {
      stringToReturn += index === name.length - 1 ? `and ${n}.` : `${n} `;
    });
    return stringToReturn;
  }
  if (isCapitalLettersOnly(name)) {
    return `HELLO, ${name}!`;
  }
  return `Hello, ${name}.`;
}

module.exports = greeting;