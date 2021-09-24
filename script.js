//Buttons on the starting page
const generateBtn = document.querySelector("#generate");
const copyBtn = document.querySelector("#copy");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
 //Choices is an array place holder which will be used to contain the choices made by the user for their password.
  var choices;

  //This sets the length of the generated password to the length of the number that is entered by the user.
  var length = parseInt(prompt("What length would you like your password to be?"));
  
//makes sure that only integers are entered on this first step, otherwise it will not proceed.
if (isNaN(length)) {
  console.log("Denied");
  alert("Your answer must be a number.");
  
  //WHILE-LOOP DID NOT WORK SADLY :( LEAVING THIS FOR LATER REVISION
  //while (isNaN(length) === true) {
    //alert('Please enter a valid number between 8 and 128.');
    //prompt("What length would you like your password to be?");
    //if (length >=8 && length <= 128) {
     // break;
    //}


  //Checks to see if the number entered is between the given parameters. 
} else if (length < 8 || length > 128) {
 console.log("Denied");
alert("Number should be between 8 and 128 characters.");

}else{ 
  console.log("Access granted");

  //Picking the small letters
  var smallLettersCheck = confirm("would you like lower case letters?");

  //Picking the big letters
  var bigLetterCheck = confirm("would you like upper case letters?");

  //Adding numbers
  var numberCheck = confirm("would you like numbers?");

  //Adding special characters
  var symbolCheck = confirm ("would you like special characters?");    
};

// Character Code Generating Function (take two inputs, one for the smallest value and one for the highest value.It increments until the highest value is achieved. All the incremented values are pushed to an array)
let arrayFromLowToHigh = (low, high) => {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
};

// Generating Character Codes for each of the characters from ASCII table for each of the choices
const upperCaseCodes = arrayFromLowToHigh(65, 90);
const lowerCaseCodes = arrayFromLowToHigh(97, 122);
const numberCodes = arrayFromLowToHigh(48, 57);
const symbolCodes = arrayFromLowToHigh(33, 47)
 
  // condition for 4 negative options
  if (!smallLettersCheck && !bigLetterCheck && !numbersCheck && !charactersCheck) {
    choices = alert("You must choose a criteria!");

  // condition for 4 positive options
  } else if (smallLettersCheck && bigLetterCheck && numberCheck && symbolCheck) {

    choices = lowerCaseCodes.concat(upperCaseCodes, numberCodes, symbolCodes);
  
  } // conditions for 3 positive options
  else if (smallLettersCheck && bigLetterCheck && numberCheck) {
      choices = lowerCaseCodes.concat(upperCaseCodes, numberCodes);
  }
  else if (smallLettersCheck && bigLetterCheck && symbolCheck) {
      choices = lowerCaseCodes.concat(upperCaseCodes, symbolCodes);
  }
  else if (bigLetterCheck && numberCheck && symbolCheck) {
      choices = upperCaseCodes.concat(numberCodes, symbolCodes);
  }
  else if (smallLettersCheck && numberCheck && symbolCheck) {
      choices = lowerCaseCodes.concat(numberCodes, symbolCodes);
  }
  // conditions for 2 positive options 
  else if (smallLettersCheck && bigLetterCheck) {
    choices = lowerCaseCodes.concat(upperCaseCodes);

} else if (smallLettersCheck && numberCheck) {
    choices = lowerCaseCodes.concat(numberCodes);

} else if (smallLettersCheck && symbolCheck) {
    choices = lowerCaseCodes.concat(symbolCodes);
}
else if (bigLetterCheck && numberCheck) {
    choices = upperCaseCodes.concat(numberCodes);

} else if (bigLetterCheck && symbolCheck) {
    choices = upperCaseCodes.concat(symbolCodes);

} else if (numberCheck && symbolCheck) {
    choices = numberCodes.concat(symbolCodes);
}
// Else if for 1 positive option
else if (smallLettersCheck) {
    choices = lowerCaseCodes;
} else if (bigLetterCheck) {
    choices = upperCaseCodes;
} else if (numberCheck) {
    choices = numberCodes;
} else if (symbolCheck) {
    choices = symbolCodes;
};

//Randomizing of choices and converting the ASCII codes into normal characters
  var passwordCharacters = [];
  for (let i = 0; i < length; i++) {
  var characterCode =
    choices[Math.floor(Math.random() * choices.length)];
  passwordCharacters.push(String.fromCharCode(characterCode));
  }

  password = passwordCharacters.join("");
  return password;
};

//Puts the generated password back into the textbox for the user to see.
function UserInput(password) {
  document.getElementById("password").textContent = password;}

  var copy = document.querySelector("#copy");
  copy.addEventListener("click", function () {
      copyPassword();
  });
  
  // This copies the password to the clipboard.
  function copyPassword() {
      document.getElementById("password").select();
      document.execCommand("Copy");
      alert("Password copied to clipboard!");
  } 



