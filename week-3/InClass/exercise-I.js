/*
Create a function which accepts an array of "messy" strings. 
This function should:
-Remove all non-string entries
-Change the strings to upper case, and add an exclamation mark to the end */

const messyArray = [
    100,
    "AlicJa",
    55,
    45,
    "JuaN",
    66,
    "FredEriCo",
    "PatrIcIa",
    23,
    "RafAeL",
    67,
    19,
    "DoUg",
  ];
  
  function transformArray(str) {
    if (typeof str === "string") {
        return str;
    } 
  }
  
  function messNames(personName) {
      let shoutyName = personName.toUpperCase();
      return messNames + "!";
  }
      
  var tidyArray = messyArray.filter(transformArray).map(messNames);
  console.log(tidyArray);
  