const { bosses } = require('../datasets/bosses');

// To run the code you've written in this file, use node prototypes/problem-sets/bosses.js

console.log('Running bosses.js\n')

/* Bosses Prompts*/

/*
Level 1

Code: 
  Write a function called "getBossData" that takes in a boss as an argument and returns a string stating that boss's signature move.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getBossData("scar"))
    should print --> 
      "Scar's signatureMove is fratricide."

e.g.
  console.log(getBossData("ursula"))
    should print --> 
      "Ursula's signatureMove is tricking fools into signing legal documents without reading them thoroughly."

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/

// function getBossData(bossName){
//   let signatureMove = bosses[bossName].signatureMove
//   return `${bosses[bossName].name}'s signatureMove is ${signatureMove}.`
  
// }
// console.log(getBossData("scar"))
// console.log(getBossData("ursula"))
/*
Level 2

Code: 
  Refactor your "getBossData" function so that it takes in 2 arguments - a boss and a specific datapoint.  The function should now return a string stating information about the specified boss based on the specified datapoint. 

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getBossData("scar", "archnemesis"))
    should print --> 
      "Scar's archnemesis is Mufasa."

e.g.
  console.log(getBossData("jafar", "signatureMove"))
    should print --> 
      "Jafar's signatureMove is hypnosis."

e.g.
  console.log(getBossData("ursula", "goal"))
    should print --> 
      "Ursula's goal is to rule the seas."

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/

function getBossData(boss,attribute){
  let bossName = bosses[boss].name
  let bossAttribute = bosses[boss][attribute]
  return `${bossName}'s ${attribute} is ${bossAttribute}.`
}
console.log(getBossData("scar", "archnemesis"))
console.log(getBossData("jafar", "signatureMove"))
console.log(getBossData("ursula", "goal"))
/*
Level 3

Code: 
  Write a function called "getLoyalty" that returns average loyalty of a given boss's sidekicks.  Don't worry about rounding the decimals.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getLoyalty("scar"))
    should print -->  5.33  
e.g.
  console.log(getLoyalty("ursula"))
    should print -->  9.5  

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/
function getLoyalty(bossName){
  let bossArray = bosses[bossName].sidekicks
  console.log(bossArray)

  let loyaltySum = bossArray.reduce((acc,sidekick)=>{

  },0)

}
console.log(getLoyalty("scar"))
/*
Level 4

Test:
  * Uncomment the module.exports below.
  * Unskip the bosses prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all bosses tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/



// module.exports = {
//   getBossData,
//   getLoyalty
// };



