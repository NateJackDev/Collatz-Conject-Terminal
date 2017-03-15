// Collatz Conject
// This Entire Project was inspired by Numberphile YouTube Video on the Collatz Conjecture
// https://www.youtube.com/watch?v=5mFpVDpKX70

//     _   __      __           __           __   ____
//    / | / /___ _/ /____      / /___ ______/ /__/ __ \___ _   __
//   /  |/ / __ `/ __/ _ \__  / / __ `/ ___/ //_/ / / / _ \ | / /
//  / /|  / /_/ / /_/  __/ /_/ / /_/ / /__/ ,< / /_/ /  __/ |/ /
// /_/ |_/\__,_/\__/\___/\____/\__,_/\___/_/|_/_____/\___/|___/

// Project 1 collatz(n)
// To Start off this project we first have to understand the rules of the Collatz Conjecture

// 1. Pick a number and if that number is odd then you plug the number into n = 3n + 1
// 2. If the number is even then, you divide the number by 2, n/2
// 3. The loop finishes when the number hits the number 1

// Project 2 repeat(min, max)
// This Project is to make automation a way to solve what you are looking for

// 1. Use the collatz function to run through a set of numbers to discover patterns if possible
// 2. Enter the collatz inside a function rapped up with a for loop to loop through the set of numbers
// 3. Let the User be able to set a min and max on the set of values to run through the conjecture
console.log("This program was though out and coded by Nathan Jackson\nIf you would like what Nathan does go follow him over on Twitter twitter.com/NateJackDev");
console.log("To get this up and running all you need to do is follow these instructions");
console.log("To run a number throught the collatz conjection type and run in console\ncollatz(THE NUMBER YOU WANT TO RUN) Ex. collatz(50)");
console.log("Another additional feature is you can loop threw a series of numbers using the collatz conjecture");
console.log("To run it, write a minumum and a maxium number in the console\nrepeat(minumun, maxium) Ex. repeat(50, 100)");

// Function to determine if the number given by the user is even of odd
function isEven(a) {
  a = Number(a);
  return a === 0 || !!(a && !(a%2));
}

// Collatz Conjecture
function collatz(n){
  const number = n;
  let counter = 0;
  do{    
    counter += 1;
    // Condition
    if(isEven(n) === true){
      n = n * 0.5;
    }else if(n === 1){
      break;
    }
    else{
      n = n * 3 + 1;}
  } while(n != 1)
  console.log(number + "=>" + counter);
}

function repeat(min, max){
  let op;
  let num = 0;
  for(let i = min; i <= max; i++){
    document.write(collatz(i));
  }
}
