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
    name.forEach((n, index) => {
      if(index<name.length-2){
        stringToReturn += `${n}, `;
      }else if (index === name.length - 1) {
        stringToReturn += `and ${n}.`;
      } else {
        stringToReturn += `${n} `;
      }
    });
    return stringToReturn;
  }
  if (isCapitalLettersOnly(name)) {
    return `HELLO, ${name}!`;
  }
  return `Hello, ${name}.`;
}

module.exports = greeting;
