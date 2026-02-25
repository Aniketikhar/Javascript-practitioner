// output: 
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let d = new Date;
let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is: ", daylist[d.getDay()])

let hour = d.getHour();
let pretend = hour > 12 ? 'PM' : 'AM';
let min = d.getMinute();
let sec = d.getSecond();
console.log(" current time is: ", hour);

