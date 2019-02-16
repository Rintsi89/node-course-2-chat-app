// Jan 1st 1970 00:00:00

var moment = require("moment");

// var date = moment();



// date.add(1, "year").subtract(1, "months")
// console.log(date.format("MMM Do, YYYY"));

// 10:35 am
// use padded 6:01. Use am and pm

new Date().getTime()
var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format("a h:mm"));
