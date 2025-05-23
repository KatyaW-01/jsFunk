const { clubs } = require('../datasets/clubs');

// To run the code you've written in this file, use node prototypes/problem-sets/clubs.js

console.log('Running clubs.js')

/* Clubs Prompts*/

/*
Level 1

Code: 
  Write a function called "findClubMembers" that takes in the clubs data as an argument.  Your function should create an object whose keys are the names of people, and whose values are arrays that include the names of the clubs that person is a part of. 

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findClubMembers(clubs))
    should print --> 
    {
      Louisa: ['Drama', 'Art'],
      Pam: ['Drama', 'Art', 'Chess'],
      Nathaniel: ['Drama', 'Astronomy'],
      ...etc
    }

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
  1. set a variable equal to an empty object
  2. Iterate over the dataset pulling out the club names and the member arrays
  3. iterate over the member arrays
    4. if there isnt already a key of that member in the results object create one and set the value to an empty array
    5. push the club name into that array
  6. return the results
*/

// function findClubMembers(data){
//   let results = {}
  
//   data.forEach((club)=>{
//     let name = club.club
//     let members = club.members

//     members.forEach((member)=>{
//       if(!results[member]){
//         results[member] = []
//       }
//       results[member].push(name)
//     })
//   })
//   return results
// }

// console.log(findClubMembers(clubs))

function findClubMembers(data) {
  return data.reduce((acc, { club, members }) => {
    members.forEach(member => {
      if (!acc[member]) {
        acc[member] = []
      }
      acc[member].push(club)
    })
    return acc
  }, {})
}

console.log(findClubMembers(clubs))
/*
Level 2

Test:
  *Uncomment the module.exports below.
  *Unskip the 1 Club Prompts test in your prototype-test.js file.
  *Run `npm test` to confirm that your function is passing the test.
  *Refactor as needed until the test is passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/



module.exports = {
  findClubMembers
};
