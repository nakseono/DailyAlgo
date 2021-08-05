// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  let arr = str.split(/[-_]/g);
  let result = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    result.push(arr[i][0].toUpperCase() + arr[i].slice(1));
  }

  return result.join("");
}

// <<- another solution ->>

function toCamelCase(str) {
  var regExp = /[-_]\w/gi;
  return str.replace(regExp, function (match) {
    return match.charAt(1).toUpperCase();
  });
}
