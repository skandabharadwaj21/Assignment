const _ = require('lodash')

const users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 35 },
    ]; 

   const user = _.find(users, (user) =>{
    return user.age>21 && user.age<26
   })

   if(user){
    console.log(`User ${user.name}`)
   }