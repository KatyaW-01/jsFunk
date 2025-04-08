const { boardGames } = require('../datasets/boardGames');

// To run the code you've written in this file, use node prototypes/problem-sets/boardGames.js

console.log('Running boardGames.js\n')

/* Board Games Prompts*/

/*
Level 1

Code: 
  Write a function called "listGames" that takes in a type as an argument and returns an array of just the names of the games within a specified type. 

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(listGames("strategy"))
    should print -->      
      ["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket to Ride"]

e.g.
  console.log(listGames("childrens"))
    should print -->      
      ["Candy Land", "Connect Four", "Operation", "Trouble"]

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 

  1. acess the array of just the type you want
  2. map over that array return the value at the name key for each object in the array
*/
function listGames(type){
  let typeArray = boardGames[type] //cant use dot notation because it will look for a key called "type"
  
  let arrayOfNames = typeArray.map((object)=>{
    return object.name
  })
  return arrayOfNames
 
}
console.log("Strategy Names:", listGames("strategy"))
console.log("Childrens Names:", listGames("childrens"))

/*
Level 2

Code: 
  Write a function called "findHighestRatedGamesByType" that takes in a type as an argument returns an object which is the highest rated game within the specified type.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findHighestRatedGamesByType("strategy"))
    should print -->   
    { name: 'Azul', rating: 8.8, maxPlayers: 4 }

e.g.
  console.log(findHighestRatedGamesByType("party"))
    should print -->   
    { name: 'Codenames', rating: 7.4, maxPlayers: 8 }

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
  1. store the array of objects for a specific type in a variable
  2. use reduce on that array to create another array with just the rating values in it
  3. find the max value from that array storing it as a variable
  4. use find on the first array of objects searching for the object that has the max rating value
  5. return that object
*/

function findHighestRatedGamesByType(type){
  let typeArray = boardGames[type]

  let ratingArray = typeArray.reduce((acc,object)=>{
    acc.push(object.rating)
    return acc
  },[])

  let maxRating = Math.max(...ratingArray) //7.4

  let maxRatingObject = typeArray.find((object)=> object.rating === maxRating)
  return maxRatingObject
}

console.log("Party max rating:", findHighestRatedGamesByType("party")) 
console.log("Strategy max rating:", findHighestRatedGamesByType("strategy"))


/*
Level 3

Code: 
  Write a function called "averageScoreByType" that takes in a type as an argument and returns the average score for the specified type.  Do not worry about rounding your result.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().  
e.g.
  console.log(averageScoreByType("strategy"))
    should print -->      
      7

e.g.
  console.log(averageScoreByType("childrens"))
    should print -->      
      4.25

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
  1. get the array of type of game objects
  2. use reduce to get the sum of the ratings for that type, storing it in a variable
  3. divide that sum by the length of the array to get the average
  4. return the average
*/
function averageScoreByType(type){
  let typeArray = boardGames[type]
  let ratingSum = typeArray.reduce((acc,object)=>{
    acc += object.rating
    return acc
  },0)
  let average = ratingSum/typeArray.length

  return average

}

console.log("Strategy average:", averageScoreByType("strategy"))
console.log("Childrens average:", averageScoreByType("childrens"))
/*
Level 4

Code: 
  Write a function called "averageScoreByTypeAndPlayers" that takes in 2 arguments - a type and a maximum number of players. The function should return the average score of any games that match the specified type and maximum number of players.  Do not worry about rounding your result.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().  
e.g.
  console.log(averageScoreByTypeAndPlayers("strategy", 2))
    should print -->      
      6.16666666667

e.g.
  console.log(averageScoreByTypeAndPlayers("childrens", 4))
    should print -->      
      3.8

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
  1. get array of just the type you want
  2. filter the array to get an array of only the objects that have the number of players passed into the argument
  3. use reduce on that filtered array to get the sum of the ratings
  4. divide that sum by the length of the filtered array to get the average
  5. return the average
*/
  
function averageScoreByTypeAndPlayers(type,players){
  let typeArray = boardGames[type]

  let filteredArray = typeArray.filter((object)=> object.maxPlayers === players)

  let ratingSum = filteredArray.reduce((acc,object)=>{
    acc += object.rating
    return acc
  },0)
  
  let average = ratingSum/filteredArray.length
  return average
}

console.log("Strategy Filtered Average:", averageScoreByTypeAndPlayers("strategy", 2))
console.log("Childrens Filtered Average:", averageScoreByTypeAndPlayers("childrens", 4))
/*
Level 5

Test:
  * Uncomment the module.exports below.
  * Unskip the Board Games Prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all Board Games tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/



module.exports = {
  listGames,
  findHighestRatedGamesByType,
  averageScoreByType,
  averageScoreByTypeAndPlayers
};
