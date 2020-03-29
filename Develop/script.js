// Assignment code here
var charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*?"

var passwordLength = function() {
  var charNumber = window.prompt("How many characters would you like your password to have?") 
    if (charNumber < 8 || charNumber > 128) {
      window.alert("Please pick a number between 8 and 128.");
      passwordLength ();
    }
}

var charInfo = function() {
  var charSpecial = window.confirm() {
    
  }
  var charNumbers = window.confirm 
  var charCaps = window.confirm 
}

if (charSpecial) {
  charSet = 
}

// for loop that loops as many times as there are characters in the password as determined by passwordLength


var generatePassword = function () {
  passwordLength();
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
