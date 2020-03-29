// Assignment code here
var charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*?"

// determine how many characters will be in the generated password
var passwordLength = function() {
  var charNumber = window.prompt("How many characters would you like your password to have?") 
    // if the answer is an integer not between 8 or 128, run the passwordLenght function again until an acceptable answer is entered
    if (charNumber < 8 || charNumber > 128) {
      window.alert("Please pick a number between 8 and 128.");
      passwordLength ();
    }
}

// determine if the password should have captial letters, special characters, and/or numbers
var passwordInfo = function() {
  var charSpecial = window.confirm("Would You like your password to have special characters?") 
    if (!charSpecial) {
      charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    }
    else charSet = charSet
  var charNumbers = window.confirm ("Would you like your password to have numbers?")
    if (!charNumbers) {
      charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*?"
    }
    else if ((!charNumbers) && (!charSpecial)){
      charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    else charSet = charSet
  var charCaps = window.confirm ("Would you like your password to have capital letters?") 
    if (!charCaps) {
      charSet = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*?"
    }
    else if ((!charCaps) && (!charSpecial)) {
      charSet = "abcdefghijklmnopqrstuvwxyz1234567890"
    }
    else if ((!charCaps) && (!charNumbers)) {
      charSet = "abcdefghijklmnopqrstuvwxyz!@#$%^&*?"
    }
    else charSet = charSet
}

// for loop that loops as many times as there are characters in the password as determined by passwordLength


var generatePassword = function () {
  passwordLength();
  passwordInfo();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
