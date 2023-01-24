// forEach Method
// function doubleValues(array){
// array.forEach(function(val) {
//     return (val * 2);
// });
// }
//map
// function doubleValues(array){
//     return array.map(function(val) {
//         return (val * 2);
//     });

//     }

// console.log(doubleValues([5,1,2,3,10])) // [10,2,4,6,20]

// 2) onlyEvenValues

/* Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

onlyEvenValues([1,2,3]) // [2]
onlyEvenValues([5,1,2,3,10]) // [2,10]*/
// function onlyEvenValues(arr){
// return arr.filter((val)=>{
// return val % 2 === 0
// })
// }

// function onlyEvenValues(arr){
//   let newArr = []
//  arr.forEach(val => {
//   if(val % 2 === 0){
//     newArr.push(val)
//   }
//   });
//   return newArr
//   }

// console.log(onlyEvenValues([1,2,3])) // [2]
// console.log(onlyEvenValues([5,1,2,3,10])) // [2,10]*/


// 3) showFirstAndLast
// Write a function called showFirstAndLast which accepts an array of strings and
// returns a new array with only the first and last character of each string.

// showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
// showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

// function showFirstAndLast (arr) {
//     //filter
//     return arr.map(val =>{
//         console.log;
//         return  val[0] + val[val.length-1]
//     })
//     //clg the first and last letter using 0 -1
//     // use &&
// }
// console.log(showFirstAndLast(['colt','matt', 'tim', 'test']))
// console.log(showFirstAndLast(['hi', 'goodbye', 'smile'])) // ['hi', 'ge', 'se']

// 4) addKeyAndValue
// Write a function called addKeyAndValue which accepts an array of objects, a key, and a
//  value and returns
// the array passed to the function with the new key and value added for each object

// addKeyAndValue(
//     [
//       {name: 'Elie'},
//       {name: 'Tim'},
//       {name: 'Matt'},
//       {name: 'Colt'}
//     ],
//       'title',
//       'instructor'
//     )
// function addKeyAndValue(obj){
// return obj.map(item=> {
//   console.log(item["title"]= "instructor");
// })
// }

// Write a function called vowelCount which accepts a string and returns an object with the keys as
// the vowel and the values as the number of times the vowel appears in the string.
// This function should be case insensitive so a lowercase letter and uppercase letter should count
// const vowelCount = str =>{
//   let vowels = "aeiou"
//   let vowelObj = {};
//   let strSplt = str.toLowerCase().split("");
//   strSplt.forEach(el => {
//     if(vowels.includes(el)){
//       if(!vowelObj[el]){
//       vowelObj[el] = 1
//     } else{
//       vowelObj[el]++
// }
// }
//   });
//   return vowelObj
// }
// // console.log(vowelCount('Elie')) // {e:2,i:1};
// console.log(vowelCount('Tim')) // {i:1};
// console.log(vowelCount('Matt')) // {a:1})
// console.log(vowelCount('hmmm')) // {};
// console.log(vowelCount('I Am awesome and so are you')) // {i: 1, a: 4, e: 3, o: 3, u: 1});

// valTimesIndex
// Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

// const valTimesIndex = arr => {
//   return arr.map((el, i) =>{
//     return el * i
//   })
// }
// console.log(valTimesIndex([1,2,3])) // [0,2,6]
// console.log(valTimesIndex([1,-2,-3]))// [0,-2,-6]

// Write a function called extractKey which accepts an array of objects
// and some key and returns a new array with the value of that key in each object.



// const extractKey =(obj) => {
//   let newArr =  obj.map(el =>{
//    return el.name
//   })
//   return newArr
// }

// extractKey(
//   [
//     {name: 'Elie'},
//     {name: 'Tim'},
//     {name: 'Matt'},
//     {name: 'Colt'}
//   ],
//   'name'
// )
//   // ['Elie', 'Tim', Matt', 'Colt']


//   extractFullName
// Write a function called extractFullName which accepts an array of objects and
// returns a new array with the value of the key with a name of “first” and the value of
// a key with the name of “last” in each object, concatenated together with a space.
// const extractFullName = (arr)=>{
//   return arr.map(el=>{
//  return `${el.first} ${el.last}`
//   })
// }

// extractFullName([
//   {first: 'Elie', last:"Schoppik"},
//   {first: 'Tim', last:"Garcia"},
//   {first: 'Matt', last:"Lane"},
//   {first: 'Colt', last:"Steele"}
// ])


//   // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']

// filterByValue
// Write a function called filterByValue which accepts an array of objects and a key and
// returns a new array with all the objects that contain that key.


//  const filterByValue = (arr)=>{
//   return arr.filter(el => {
//       return el.isCatOwner
//       })
//   }

//  filterByValue(
// [
//   {first: 'Elie', last:"Schoppik"},
//   {first: 'Tim', last:"Garcia", isCatOwner: true},
//   {first: 'Matt', last:"Lane"},
//   {first: 'Colt', last:"Steele", isCatOwner: true}
// ],
// 'isCatOwner'
// )
/*
  [
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'Colt', last:"Steele", isCatOwner: true}
  ]
*/

// find
// Write a function called find which accepts an array and a value and
// returns the first element in the array that has the same value as the second
// parameter or undefined if the value is not found in the array.

// function find(arr, num){
//   return arr.filter(el =>{
//  return el === num
//   })
// }

// console.log(find([1,2,3,4,5], 3)) // 3
// console.log(find([1,2,3,4,5], 10)) // undefined

// Write a function called removeVowels which accepts a string and
// returns a new string with all of the vowels (both uppercased and lowercased) removed.
// Every character in the new string should be lowercased.

// function removeVowels(str) {
//   let vowels ='aeiouAEIOU';
//   let strSplt = str.toLowerCase().split("");
//    let remove = strSplt.filter(el=>{
//    return !vowels.includes(el)
//   })
//   return remove.join("")
// }

// console.log(removeVowels('Elie')) // ('l')
// console.log(removeVowels('TIM')) // ('tm')
// console.log(removeVowels('ZZZZZZ')) // ('zzzzzz')


// doubleOddNumbers
// Write a function called doubleOddNumbers which accepts an array and
// returns a new array with all of the odd numbers doubled (HINT - you can use
//   map and fitler to double and then filter the odd numbers).

// const doubleOddNumbers = arr => {
//   return arr.filter(el2 => el2 % 2 !== 0)
//             .map(el => el *2)
// }

// console.log(doubleOddNumbers([1,2,3,4,5])) // [2,6,10]
// console.log(doubleOddNumbers([4,4,4,4,4])) // []

// findInObj
// Write a function called findInObj which accepts an array of objects,
// a key, and some value to search for and returns the first found value in the array.



const findInObj = (arr, key, value)=>{
  return arr.filter(el=>{
    return (el[key] === value);
  })[0]
}
// {first: 'Tim', last:"Garcia", isCatOwner: true}
findInObj(
  [
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'att', last:"Lane"},
    {first: 'Colt', last:"Steele", isCatOwner: true}
  ],
  'isCatOwner',
  true
)
