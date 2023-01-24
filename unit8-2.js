// 1) hasOddNumber
// Write a function called hasOddNumber which accepts an array
// and returns true if the array contains at least one odd number,
// otherwise it returns false.

// function hasOddNumber(arr){
//     return arr.some(el => el %  2 !== 0 )
// }

// console.log(hasOddNumber([1,2,2,2,2,2,4])) // true
// console.log(hasOddNumber([2,2,2,2,2,4])) // false

// 2)hasAZero
// Write a function called hasAZero which accepts a number and returns true if that number
// contains at least one zero. Otherwise, the function should return false
//  function hasAZero(number){
//     return number.toString().split("").some(el => el === '0')
//  }
// console.log(hasAZero(33321232131012)) // true
// console.log(hasAZero(1212121)) // false

// 3) hasOnlyOddNumbers
// Write a function called hasOnlyOddNumbers which accepts an array and returns true
// if every single number in the array is odd. If any of the values in the array are not odd,
// //  the function should return false.
//  function hasOnlyOddNumbers(arr){
//    return arr.every(el=> el % 2 !== 0)
//  }
// console.log(hasOnlyOddNumbers([1,3,5,7])) // true
// console.log(hasOnlyOddNumbers([1,2,3,5,7])) // false

// 4) hasNoDuplicates
// Write a function called hasNoDuplicates which accepts an array and
// returns true if there are no duplicate values (more than one element in the
// array that has the same value as another). If there are any duplicates, the function should
// return false.

// function hasNoDuplicates (arr){
//     return arr.every(el=> arr.indexOf(el) === arr.lastIndexOf(el))
// }

// console.log(hasNoDuplicates([1,2,3,1])) // false
// console.log(hasNoDuplicates([1,2,3])) // true

// 5)hasCertainKey
// Write a function called hasCertainKey which accepts an array of objects and a key,
// and returns true if every single object in the array contains that key. Otherwise
// it should return false.

// let arr = [
//     {title: "Instructor", first: 'Elie', last:"Schoppik"},
//     {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
//     {title: "Instructor", first: 'Matt', last:"Lane"},
//     {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
//   ]

//   function hasCertainKey (arr, key){
//     return arr.every(el => el[key])
//   }
//   console.log(hasCertainKey(arr,'first')) // true
//   console.log(hasCertainKey(arr,'isCatOwner')) // false

// 6) hasCertainValue
// Write a function called hasCertainValue which accepts an array of objects
// and a key, and a value, and returns true if every single object in the array
// contains that value for the specific key. Otherwise it should return false.
// function hasCertainValue (arr, key, someValue){
//     return arr.every(el => el[key] === someValue)
// }
// let arr = [
//     {title: "Instructor", first: 'Elie', last:"Schoppik"},
//     {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
//     {title: "Instructor", first: 'Matt', last:"Lane"},
//     {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
//   ]

//   console.log(hasCertainValue(arr,'title','Instructor')) // true
//   console.log(hasCertainValue(arr,'first','Elie')) // false
