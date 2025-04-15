const { cakes } = require('../datasets/cakes');

// To run the code you've written in this file, use node prototypes/problem-sets/cakes.js

console.log('Running cakes.js\n')

/* Cakes Prompts*/

/*
Level 1

Code: 
  Write a function called "getStockCounts" that returns an array of objects that include just the flavor of the cake and how much of that cake is in stock.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getStockCounts())
    should print --> 
      [
       { flavor: 'dark chocolate', inStock: 15 },
       { flavor: 'yellow', inStock: 14 },
        ..etc
      ]

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
  1. use a map to iterate over the cakes array and return an object of just the flavor and instock
*/
function getStockCounts(){
  let stockArray = cakes.map((cake)=>{
    return {
      flavor: cake.cakeFlavor,
      inStock: cake.inStock
    }
  })
  return stockArray

}
console.log(getStockCounts())
/*
Level 2

Code: 
  Write a function called "getInStock" that returns an array of only the cakes that are in stock.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getInStock())
    should print -->   
    [
      {
      cakeFlavor: 'dark chocolate',
      filling: null,
      frosting: 'dark chocolate ganache',
      toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
      inStock: 15
      },
      {
        cakeFlavor: 'yellow',
        filling: 'citrus glaze',
        frosting: 'chantilly cream',
        toppings: ['berries', 'edible flowers'],
        inStock: 14
      },
      ..etc
    ]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/
function getInStock(){
  let inStockCakes = cakes.filter((cake)=>{
    return cake.inStock > 0
  })
  return inStockCakes
}
console.log(getInStock())
/*
Level 3

Code: 
  Write a function called "doInventory" that returns the total amount of cakes in stock.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(doInventory())
    should print -->  59

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
  1. Use reduce to iterate over the cakes array and get the sum of the inStock value
  2. return that value 
*/

function doInventory(){
  let cakeSum = cakes.reduce((acc,cake)=>{
    acc += cake.inStock
    return acc
  },0)
  return cakeSum
}
console.log("total inventory:",doInventory())  
/*
Level 4

Code: 
  Write a function called "getToppings" that returns an array of all unique toppings (no duplicates) needed to bake every cake in the dataset.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getToppings())
    should print -->  
        ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/
function getToppings(){
  let allToppings = cakes.flatMap((cake)=>{
    return cake.toppings
  })

  let uniqueToppings = [...new Set(allToppings)]

  return uniqueToppings
}
console.log(getToppings())
/*
Level 5

Code: 
  I need to make a grocery list.  Write a function called "makeGroceryList" that will give me an object where the keys are each topping, and the values are the amount of that topping I need to buy.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(makeGroceryList())
    should print -->  
      {
        'dutch process cocoa': 1,
        'toasted sugar': 3,
        'smoked sea salt': 3,
        'berries': 2,
        ...etc
      }

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
  1. use flatMap to filter through the array of objects, returning only the nested toppings array. FlatMap will make it so your return value is a single array of all the toppings instead of multiple nested arrays
  2. Use a reduce on the toppings array making the topping a key of a hash and then use filter for the value finding where the topping is equal to the element of the reduce which will return an array of just those toppings.
  3. calling .length on the filter will give you how many you have of those toppings.
*/

function makeGroceryList(){
  let allToppings = cakes.flatMap((cake)=>{
    return cake.toppings
  })
  
  let list = allToppings.reduce((acc,item)=>{
    acc[item] = allToppings.filter((topping)=>topping === item).length
    return acc
  },{})

  return list
}
console.log("Grocery List:", makeGroceryList())
/*
Level 6

Test:
  * Uncomment the module.exports below.
  * Unskip the 5 Cakes Prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all 5 tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/



module.exports = {
  getStockCounts,
  getInStock,
  doInventory,
  getToppings,
  makeGroceryList
};
