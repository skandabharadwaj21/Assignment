const _ = require('lodash');

const numbers = [1, 2, 3];

const squareNo = _.map(numbers, (num) => {
    return num * num;
});

const uniqNo = _.uniq(squareNo);

console.log(uniqNo);
