/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((module) => {

eval("function isEmptyNullOrWhitespace(name) {\n  return name === null || name === undefined || name === \"\";\n}\n\nfunction isCapitalLettersOnly(name) {\n  return name === name.toUpperCase();\n}\n\nfunction formatLowercaseNames(lowercaseNames, language) {\n  let formattedString = \"\";\n  let conjunction = \"and\";\n  if (language === \"fr\") {\n    conjunction = \"et\";\n  } else if (language === \"nl\") {\n    conjunction = \"en\";\n  }\n  lowercaseNames.forEach((n, index) => {\n    if (index < lowercaseNames.length - 2) {\n      formattedString += `${n}, `;\n    } else if (index === lowercaseNames.length - 1) {\n      formattedString += `${conjunction} ${n}.`;\n    } else {\n      formattedString += `${n} `;\n    }\n  });\n  return formattedString;\n}\n\nfunction greet(name) {\n  if (isEmptyNullOrWhitespace(name)) {\n    return \"Hello, my friend.\";\n  }\n\n  if (Array.isArray(name)) {\n    // eslint-disable-next-line no-use-before-define\n    return greetArray(name);\n  }\n\n  // eslint-disable-next-line no-use-before-define\n  return greetSingle(name);\n}\n\nfunction greetArray(names) {\n  let stringToReturn = \"Hello, \";\n  const uppercaseNames = [];\n  const lowercaseNames = [];\n  let language = \"en\"; // Default language is English\n\n  const isLanguageTag = (name) => [\"fr\", \"nl\"].includes(name);\n\n  names.forEach((n) => {\n    if (isLanguageTag(n)) {\n      // Set the language if a language tag is found\n      language = n;\n    } else if (isCapitalLettersOnly(n)) {\n      uppercaseNames.push(n);\n    } else {\n      lowercaseNames.push(n);\n    }\n  });\n\n  // Apply language-specific translation\n  switch (language) {\n    case \"fr\":\n      stringToReturn = \"Bonjour \";\n      break;\n    case \"nl\":\n      stringToReturn = \"Halo \";\n      break;\n    default:\n      break;\n  }\n\n  stringToReturn += formatLowercaseNames(lowercaseNames, language);\n\n  if (uppercaseNames.length > 0) {\n    const formattedUppercaseNames = uppercaseNames.map((name) => name.toUpperCase());\n    stringToReturn += ` AND HELLO ${formattedUppercaseNames.join(\" AND \")} !`;\n  }\n\n  return stringToReturn;\n}\n\nfunction greetSingle(name) {\n  if (isCapitalLettersOnly(name)) {\n    return `HELLO, ${name}!`;\n  }\n\n  return `Hello, ${name}.`;\n}\n\nmodule.exports = greet;\n\n\n//# sourceURL=webpack://devops-mini-proj-tdd-greetings/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;