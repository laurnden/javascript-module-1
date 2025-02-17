/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

const longNameThatStartsWithAame = (names.find(name => name.startsWith("A") && name.length >7));
const result = longNameThatStartsWithAame;
console.log(result);

//var longNameThatStartsWithA = findLongNameThatStartsWithA(names);

//console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"