const accountId = 43
let accountEmail = "kshama@gmail.com"
var accountPassword = "12345"
accountCity = "Hapur"
let accountState;
 //accountId = 23 //not allowed
console.log(accountId);


accountEmail = "abc@gmail.com"
accountPassword = "yuioh"
accountCity = "Noida"


 /* prefer not to use var
 because if scope in block scope and functional scope
 */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
