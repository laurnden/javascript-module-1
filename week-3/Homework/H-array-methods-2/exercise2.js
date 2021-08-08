/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str){
  var firstLetterSlice  = str.split("");
  firstLetterSlice[0] = firstLetterSlice[0].toUpperCase();
  

  return  firstLetterSlice.join("");
}



/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello amanda"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/