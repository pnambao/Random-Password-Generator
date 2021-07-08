// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var length = parseInt( prompt("What length would you like your password to be?"))
if (isNaN(length)) {
  console.log("Denied");
  alert("Your answer must be a number.");
  generatePassword()
}
if (length > 128) {
  console.log("Denied");
  alert("Number should be between 8 and 128 characters.");
  generatePassword()
} 
if (length < 8) {
  console.log("Denied");
  alert("Number should be between 8 and 128 characters.");
  generatePassword() 
}else{
 console.log("Access granted");
}

var newPassword = "";
//Picking the small letters
var smallLetters = "abcdefghijklmnopqrstuvwxyz"; 
var smallLettersCheck = confirm("would you like lower case letters?");
if (smallLettersCheck === true) {
  console.log("yes");
} else {
  console.log("no");
}
//Picking the big letters
var bigLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var bigLetterCheck = confirm("would you like upper case letters?");
if (bigLetterCheck === true) {
  console.log("yes")
} else {
  console.log("no")
}
//Adding numbers
var numbers = "0123456789";
var numbersCheck = confirm("would you like numbers?");
if (numbersCheck === true) {
  console.log("yes")
} else {
  console.log("no")
}
//Adding special characters
var characters = "!@#$%^&*?/";
var charactersCheck = confirm ("would you like special characters?");
if (charactersCheck === true) {
  console.log("yes");
} else {
  console.log("no");
}

//Randomizing the selections

return newPassword

}





