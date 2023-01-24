// 1)extractValue
// Write a function called extractValue which accepts an array of objects
// and a key and returns a new array with the value of each object at the key.
// const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]

// function extractValue(arr, key){
//  return arr.reduce(function(accum, nextWord){
//         accum.push(nextWord[key])
//         return accum
//     },[])

// }

// console.log(extractValue(arr,'name')) // ['Elie', 'Tim', 'Matt', 'Colt']

// 2) vowelCount
// Write a function called vowelCount which accepts a string and returns an object
// with the keys as the vowel and the values as the number of times the vowel appears in the
// string. This function should be case insensitive so a lowercase letter and uppercase letter
//  should count

// const vowelCount = (str) =>{
// let vowels = 'aeiou'
// let strSplt = str.toLowerCase().split("");
//  return strSplt.filter(el => vowels.includes(el))
//         .reduce(function (acc, el ){
//   if(!acc[el]){
//     acc[el] = 1
//   } else {
//     acc[el] +=1
//   }
//   return acc
//  },{})
// }

// console.log(vowelCount('Elie')) // {e:2,i:1};
// console.log(vowelCount('Tim')) // {i:1};
// console.log(vowelCount('Matt')) // {a:1})
// console.log(vowelCount('hmmm')) // {};
// console.log(vowelCount('I Am awesome and so are you')) // {i: 1, a: 4, e: 3, o: 3, u: 1};

// 3) partition
// Write a function called partition which accepts an array and a callback and returns an
// array with two arrays inside of it. The partition function should run the callback function
// on each value in the array and if the result of the callback function at that specific value
// is true, the value should be placed in the first subarray. If the result of the callback function
// at that specific value is false, the value should be placed in the second subarray.
// function isEven(val){
//   return val % 2 === 0;
// }

// const arr = [1,2,3,4,5,6,7,8];

// partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];

function isLongerThanThreeCharacters(val){
  return val.length > 3;
}

const names = ['Elie', 'Colt', 'Tim', 'Matt'];

function partition (arr, cb) {
   const trueArr = arr.reduce(function(acc, el){
        if(cb(el) === true) acc.push(el);
            return acc

    },[])

   const falseArr = arr.reduce(function(acc, el){
        if(!cb(el)) acc.push(el);
        return acc
    },[])
    return [trueArr , falseArr]
}

console.log(partition(names, isLongerThanThreeCharacters)) // [['Elie', 'Colt', 'Matt'], ['Tim']]
