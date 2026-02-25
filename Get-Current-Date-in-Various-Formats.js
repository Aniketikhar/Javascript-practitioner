// Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


let today = new Date;
let date = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

console.log(month + "-" + date + "-" + year);
console.log(month + "/" + date + "/" + year);
console.log(date + "-" + month + "-" + year);
console.log(month + "/" + date + "/" + year);