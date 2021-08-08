const numberOfStudents = 13;
const numberOfMentors = 2;
const totalOfPeople = numberOfStudents + numberOfMentors;

const percentageOfStudents = Math.round((numberOfStudents / totalOfPeople) * 100);
const percentageOfMentors = Math.round((numberOfMentors / totalOfPeople) * 100);

console.log(percentageOfStudents);
console.log(percentageOfMentors);

// Math.random()
/*
random() generates a random number between 0 and 1.
It represents a number from 0 up to but not including 1
*/

console.log(Math.random());



// Math.floor()

/*
floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result. 
*/
console.log(Math.floor());

//Math.random() | Math.floor()

console.log(Math.floor(Math.random() * numberOfStudents) + 1)