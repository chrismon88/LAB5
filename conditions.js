// pre-requisites for Android programming - C# or Java

let takenCSharp = false
let takenJava = true

if (takenCSharp|| takenJava) {
    console.log('You meet the pre-requisites for Android ')
}else {
    console.log('Sorry you must take at least one of the two classes in order to register for Android programming.')
}


//Your turn! TO be a senator, there are 3 requirements:
// you must be at least 30 years old
// you have to have been a US citizen for 9 or more years
// you must live in the state that you want to represent

let age = 31
let usCitizenTime = 0
let stateOfResidence = 'Minnesota'
let statWantToRep = 'Utah'

if (age >= 30 && usCitizenTime >= 9 && stateOfResidence === statWantToRep) {
    console.log('You are eligible to be a senator.')
}else {
    console.log('Sorry, you do not meet requirements.')

}