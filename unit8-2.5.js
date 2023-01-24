// 1)findUserByUsername
// Write a function called findUserByUsername which accepts an array of objects,
// each with a key of username, and a string. The function should return the first object
// with the key of username that matches the string passed to the function. If the object is not found,
// // return undefined.
//  const findUserByUsername = (arr, value)=>{
//     return arr.find(el => el.username === value)

//  }
// const users = [
//   {username: 'mlewis'},
//   {username: 'akagen'},
//   {username: 'msmith'}
// ];

// console.log(findUserByUsername(users, 'mlewis')) // {username: 'mlewis'}
// console.log(findUserByUsername(users, 'taco')) // undefined

// 2) removeUser
// Write a function called removeUser which accepts an array of objects,
// each with a key of username, and a string. The function should remove the object from the array
// and return this object. If the object is not found, return undefined.

function removeUser(arr, value){
    let foundIndex =arr.findindex(el => {
    return el.username === value
    })

    if(foundIndex === -1) return
    return usersArray.splice(foundIndex,1)[0];
}
const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
