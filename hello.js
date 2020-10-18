console.log('Hello World!')


// Three ways to crete variables

let color = 'blue'
var size = 'medium'  // not recommended,exits in a lot more places scope much wider
const language = 'JavaScript' // can change this value
// language ='C#' this is an error

let quantity = 5
let distance = 4.5


let text ='Hello World'
let message = "Hi Programmers"

console.log('There are ' + quantity + ' programmers')

let todayTemp = 75
//
console.log('Today\'s temperature is ' + todayTemp + '  F.')

let tempC = (todayTemp - 32) * 5 / 9
console.log('Today\'s temperature is ' + tempC.toFixed(2) + ' C')
console.log(`Today's temperature is ${tempC.toFixed(2)} C which is equivalent to ${todayTemp} F`)// template strings

let className = 'Web Programming'
let classCode = 2560
let department = 'ITEC'
console.log(`The class ${className}, has a code of ${classCode} and is in the ${department} department.`)
console.log(`This class is ${department} ${classCode} ${className}.`)