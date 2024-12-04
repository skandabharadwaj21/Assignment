const _ = require('lodash')

const arrray =[ 1,2,3,4,5];

let ele = 5;
if(_.includes(arrray,ele)){
    console.log(`${ele} is present in the given array`)
}
else{
    console.log(`${ele} not found`)
}
