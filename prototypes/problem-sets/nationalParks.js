const { nationalParks } = require('../datasets/nationalParks');

// To run the code you've written in this file, use node prototypes/problem-sets/nationalParks.js

console.log('Running nationalParks.js')

/* National Parks Prompts*/

/*
Level 1

Code: 
  Write a function called "getParkVisitList" that returns an object containing the names of which parks I need to visit and the ones I have already visited.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getParkVisitList())
    should print -->      
    {
      parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
      parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    }

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/
function getParkVisitList() {
 const list = nationalParks.reduce((acc,park) => {
    if (park.visited === true) {
      acc.parksVisited.push(park.name)
    } else {
      acc.parksToVisit.push(park.name)
    }
    return acc
  }, {parksToVisit: [], parksVisited: []})
  return list
}

console.log(getParkVisitList())
/*
Level 2

Code: 
  Write a function called "getParkInEachState" that returns an array of objects where the key is the state and the value is its National Park.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getParkInEachState())
    should print -->   
    [
      { Colorado: 'Rocky Mountain' },
      { Wyoming: 'Yellowstone' },
      { Montana: 'Glacier' },
      { Maine: 'Acadia' },
      { Utah: 'Zion' },
      { Florida: 'Everglades' } 
    ]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/
function getParkInEachState() {
  const list = nationalParks.map((park) => {
    let object = {}
    object[park.location] = park.name
    return object
  })
  return list
}

console.log(getParkInEachState())

/*
Level 3

Code: 
  Write a function called "getParkActivities" that returns an array of all the activities I can do in a National Park. Make sure to exclude duplicates. 

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getParkActivities())
    should print -->      
    [ 
      'hiking',
      'shoeshoing',
      'camping',
      'fishing',
      'boating',
      'watching wildlife',
      'cross-country skiing',
      'swimming',
      'bird watching',
      'canyoneering',
      'backpacking',
      'rock climbing' 
    ]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/

function getParkActivities() {
  let activities = []
  nationalParks.forEach((park) => {
    park.activities.forEach((activity) => {
      activities.push(activity)
    })
  })
  const uniqueActivities = new Set([...activities])
  const activitiesArray = [...uniqueActivities]
  return activitiesArray
}

console.log(getParkActivities())
  
/*
Level 4

Test:
  * Uncomment the module.exports below.
  * Unskip the National Park Prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all National Park tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/



module.exports = {
  getParkVisitList,
  getParkInEachState,
  getParkActivities
};
