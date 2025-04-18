const { books } = require('../datasets/books');

// To run the code you've written in this file, use node prototypes/problem-sets/books.js

console.log('Running books.js\n')

/* Books Prompts*/

/*
Level 1

Code: 
  Write a function called "removeViolence" that takes in the books data as an argument and returns an array of all book titles that are not horror or true crime.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(removeViolence(books))
    should print --> 
     [
        '1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone', 'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five', 'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi', 'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar', 'Catch-22', 'Treasure Island'
      ]

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
  1. Filter through the array pulling out the books that are not horror or true crime
  2. map over the filtered array of books returning just the book title
*/

function removeViolence(data){
  let notHorrorOrCrimeArray = data.filter((book)=>{
    return book.genre != "Horror" && book.genre != "True Crime"
  })
  let bookNames = notHorrorOrCrimeArray.map((book)=>{
    return book.title
  })
  return bookNames
}

console.log("non-violent book titles:", removeViolence(books))

/*
Level 2

Code: 
  Write a function called "getByGenre" that takes 2 arguments: the books data, and a specified genre.  The function should return an array of objects containing all books of that genre.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getByGenre(books, "Fiction"))
    should print -->   
    [
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        genre: 'Fiction',
        published: 1925
      },
      {
        title: 'Lord of the Flies',
        author: 'William Golding',
        genre: 'Fiction',
        published: 1954
      },
      {
        title: 'Life of Pi',
        author: 'Yann Martel',
        genre: 'Fiction',
        published: 2001
      },
      ...etc
    ]

e.g.
  console.log(getByGenre(books, "Satire"))
    should print -->   
    [
      {
        title: 'Catch-22',
        author: 'Joseph Heller',
        genre: 'Satire',
        published: 1961
      }
    ]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
  1. filter through the array pulling out the items where the book genre matches the genre put in the paramaters
  2. return the array
*/

// function getByGenre(booksData,genre){
//   let booksGenreArray = booksData.filter((book) => book.genre === genre)
//   return booksGenreArray
// }

// console.log("Array of Fiction books:", getByGenre(books, "Fiction"))
// console.log("Array of satire books:", getByGenre(books, "Satire"))
/*
Level 3

Code: 
  Modify your "getByGenre" function so that it doesn't return the entire book object, only the title.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getByGenre(books, "Fiction"))
    should print -->   
    [
      'The Great Gatsby',
      'Lord of the Flies',
      'Life of Pi',
      'The Bell Jar',
      'Treasure Island'
    ]

e.g.
  console.log(getByGenre(books, "Satire"))
    should print -->   
    ['Catch-22']

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.  
*/

// function getByGenre(booksData,genre){
//   let booksGenreArray = booksData.filter((book) => book.genre === genre)
//   let genreBookTitles = booksGenreArray.map((book)=>{
//     return book.title
//   })
//   return genreBookTitles
// }

// console.log("Array of Fiction book titles:", getByGenre(books, "Fiction"))
// console.log("Array of satire book titles:", getByGenre(books, "Satire"))

/*
Level 4

Code: 
  Modify your "getByGenre" function so that it takes in a third argument of a year and only returns the book titles for books published after that year.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getByGenre(books, "Fiction", 1954))
    should print -->   
    [ 'Life of Pi', 'The Bell Jar' ]

e.g.
  console.log(getByGenre(books, "Science Fiction", 1950))
    should print -->   
    [
      "The Hitchhiker's Guide to the Galaxy",
      'Flowers for Algernon',
      'Slaughterhouse-Five',
      "The Handmaid's Tale"
    ]
    
Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.  
*/
  
function getByGenre(booksData,genre,year){
  let booksGenreArray = booksData.filter((book) => book.genre === genre)
  let filteredByYear = booksGenreArray.filter((book) => book.published > year)
  

  let genreBookTitles = filteredByYear.map((book)=>{
    return book.title
  })
  return genreBookTitles
}

console.log("Array of Fiction book titles by year:", getByGenre(books, "Fiction", 1954))
console.log("Array of satire book titles by year:", getByGenre(books, "Satire", 1950))

/*
Level 5

Code: 
  Write a function called "getNewBooks" that returns an array of objects containing all books that were published in the 90's and 00's. Each object should have only a title property and a year property.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getNewBooks())
    should print -->   
    [
      { title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
      { title: 'Life of Pi', year: 2001 },
      { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }
    ]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.  
  1. filter through the array returning only the book objects published after 1900
  2. use reduce to create an array of hashes with only the book title and year
  3. return that array
  4. console log the function
*/

function getNewBooks(){
  let filteredArray = books.filter((book)=>{
    return book.published >= 1900
  })
  let newBooks = filteredArray.reduce((acc,book)=>{
    acc.push({"title": book.title,
       "year": book.published})
    return acc
  },[])
  return newBooks
}
console.log("New Books:", getNewBooks())
/*
Level 6

Test:
  * Uncomment the module.exports below.
  * Unskip the Books Prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all Books tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/



module.exports = {
  removeViolence,
  getByGenre,
  getNewBooks,
};
