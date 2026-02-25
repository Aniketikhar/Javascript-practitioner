// output: 
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let d = new Date;
let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is: ", daylist[d.getDay()])

let hour = d.getHours();
let pretend = hour > 12 ? 'PM' : 'AM';
let min = d.getMinutes();
let sec = d.getSeconds();
console.log(" current time is: ", hour);

