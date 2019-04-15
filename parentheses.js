function check(str) {
	// The function matches index 0 to the specific pattern, then gets rid of the first character and repeats.
  let start = true;
  const string = str.split("");
  let result = true;

  const invertStart = () => {
    start = !start;
    string.shift();
  };

  for (i = 0; i < str.length; i++) {
  
    result = start
      ? string[0] !== "(" // String starts with "(" ?
        ? false
        : true
      : string[0] !== ")" // String starts with ")" ?
      ? false
      : true;
      
    invertStart(); 
    
    if (!result || str.length % 2 !== 0) {
    // returns false if result = false or str.length is an odd number
      return false;
    }
    
  }
  return result;
}

console.log(check("()()"));			 // true
console.log(check("()())(()"));	     // false
console.log(check("()()()()()()"));	 // true
console.log(check("()()()()()()(")); // false