const accountId = 233453;
let accountEmail = "rk@gmail.com";
var accountPassword = "12345";
cityName = "fridabad";
let personName;


// accountId = 9876543; // not possible to change constant variable
console.log(accountId);

/*Prefer not to use var 
because of issue of block scope and functional scope
*/ 

accountEmail = "nk@gmail.com";
accountPassword = "98765";
cityName = "dehradun";

console.table([accountId,accountEmail,accountPassword,cityName,personName])
