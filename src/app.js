function isEmptyNullOrWhitespace(name) {
  return name === null || name === undefined || name === "";
}

function isCapitalLettersOnly(name) {
  return name === name.toUpperCase();
}

function formatLowercaseNames(lowercaseNames, language) {
  let formattedString = "";
  let conjunction = "and";
  if (language === "fr") {
    conjunction = "et";
  } else if (language === "nl") {
    conjunction = "en";
  }
  lowercaseNames.forEach((n, index) => {
    if (index < lowercaseNames.length - 2) {
      formattedString += `${n}, `;
    } else if (index === lowercaseNames.length - 1) {
      formattedString += `${conjunction} ${n}.`;
    } else {
      formattedString += `${n} `;
    }
  });
  return formattedString;
}

function greet(name) {
  if (isEmptyNullOrWhitespace(name)) {
    return "Hello, my friend.";
  }

  if (Array.isArray(name)) {
    // eslint-disable-next-line no-use-before-define
    return greetArray(name);
  }

  // eslint-disable-next-line no-use-before-define
  return greetSingle(name);
}

function greetArray(names) {
  let stringToReturn = "Hello, ";
  const uppercaseNames = [];
  const lowercaseNames = [];
  let language = "en"; // Default language is English

  const isLanguageTag = (name) => ["fr", "nl"].includes(name);

  names.forEach((n) => {
    if (isLanguageTag(n)) {
      // Set the language if a language tag is found
      language = n;
    } else if (isCapitalLettersOnly(n)) {
      uppercaseNames.push(n);
    } else {
      lowercaseNames.push(n);
    }
  });

  // Apply language-specific translation
  switch (language) {
    case "fr":
      stringToReturn = "Bonjour ";
      break;
    case "nl":
      stringToReturn = "Halo ";
      break;
    default:
      break;
  }

  stringToReturn += formatLowercaseNames(lowercaseNames, language);

  if (uppercaseNames.length > 0) {
    const formattedUppercaseNames = uppercaseNames.map((name) => name.toUpperCase());
    stringToReturn += ` AND HELLO ${formattedUppercaseNames.join(" AND ")} !`;
  }

  return stringToReturn;
}

function greetSingle(name) {
  if (isCapitalLettersOnly(name)) {
    return `HELLO, ${name}!`;
  }

  return `Hello, ${name}.`;
}

module.exports = greet;
