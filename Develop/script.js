// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //your code goes here
  var letters = 'abcdefghijklmnopqrstuvwxyz';
  var numerical = '1234567890';
  var special = '!@#$%^&*()+=:;<>~';
  var upLetters = letters.toUpperCase();
  var chooseFrom = " ";

  var passLength = Number(prompt("Enter a number between 8 and 128 for password length"));
  var isUppercase = confirm("Would you like to use uppercase?");
  var isLowercase = confirm("Would you like to use lowercase?");
  var isSpecial = confirm("Would you like to use special characters?");
  var isNumber = confirm("Would you like to use numbers?");


  if (
    isUppercase
  ) {
    //use uppercase letter
    chooseFrom += upLetters;
  } if (
    isLowercase
  ) {
    //use lowercase letter
    chooseFrom += letters;
  } if (
    isSpecial
  ) {
    //use special characters
    chooseFrom += special;
  } if (
    isNumber
  ) {
    //use number
    chooseFrom += numerical;
  }

  if (passLength < 8 || passLength > 128) {
    return "error, password length invalid";
  }

  //grab random letters/characters
  //for loop? var for returning password
  var retPass = "";
  for (var i = 0; i < passLength; i++) {
    retPass += chooseFrom.charAt(Math.floor(Math.random() * chooseFrom.length));
  }
  return retPass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
