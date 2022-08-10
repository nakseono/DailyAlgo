// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. 
// The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

function validParentheses(parens) {
  if (parens[0] === ")" || parens[parens.length - 1] === "(") {
    return false;
  }

  let stack = [];

  for (let i = 0; i < parens.length; i++) {
    console.log(`parens[${i}] : ${parens[i]}`);
    parens[i] === ")"
      ? stack[stack.length - 1] === "("
        ? stack.pop()
        : stack.push(")")
      : stack.push("(");
    console.log(`stack : ${stack}`);
  }

  return stack.length === 0;
}