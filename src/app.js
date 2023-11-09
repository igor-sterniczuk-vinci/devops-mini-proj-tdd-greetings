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
    let stringToReturn = "Hello, ";
    let uppercaseName;
    let lowercaseNames = [];
    name.forEach((n) => {
      if (isCapitalLettersOnly(n)) {
        uppercaseName = n;
      }
      else {
        lowercaseNames.push(n);
      }
    });
    lowercaseNames.forEach((n, index) => {
      if(index < lowercaseNames.length - 2) {
        stringToReturn += `${n}, `;
      } else if (index === lowercaseNames.length - 1) {
        stringToReturn += `and ${n}.`;
      } else {
        stringToReturn += `${n} `;
      }
    });
    if(uppercaseName != null) {
      stringToReturn += ` AND HELLO ${uppercaseName} !`;
    }
    return stringToReturn;
  }
  if (isCapitalLettersOnly(name)) {
    return `HELLO, ${name}!`;
  }
  return `Hello, ${name}.`;
}

module.exports = greeting;