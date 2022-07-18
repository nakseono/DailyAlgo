// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  str = str.split(/[-_]/g);
  let result = [str[0]];

  for (let i = 1; i < str.length; i++) {
    result.push(str[i][0].toUpperCase() + str[i].slice(1));
  }

  return result.join("");
}
