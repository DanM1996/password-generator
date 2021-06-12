// Assignment code here
// var lowercase;
// var uppercase;
// var numeric;
// var special;
var lowerList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialList = ["!", "#", "$", "%", "&", "*", "@", "^", "?", "~", "_", "-", "/", "=", "+", "-"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordSettings = generatePassword();
  var password = passwordOptions(passwordSettings);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

};
function generatePassword() {
  var passwordLength = prompt("Choose a length for your password between 8 and 128 characters");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid option");
    // reset the function until the user enters a proper value
    return generatePassword();
  }; 
  if (passwordLength >= 8 && passwordLength <= 128) {
    // all boolean values to make the code easier
    var lowercase = confirm("Would you like your password to contain lowercase letters?");
    var uppercase = confirm("Would you like your password to contain uppercase letters? ");
    var numeric = confirm("Would you like your password to contain numeric values?");
    var special = confirm("Would you like your password to contain special characters?")
  }  
   if (!lowercase && !uppercase && !numeric  && !special) {
      alert("Please pick at least one of the values");
      return generatePassword();
  } else if (lowercase && !uppercase && !numeric && !special) {
    
  }
  // create object to store password values
  var completePassword = {
    passwordLength: passwordLength,
    lowercase: lowercase,
    uppercase: uppercase,
    numeric: numeric,
    special: special
  }
  return completePassword;
};
// when arrays are put through this function, the random function selects a random value in the array
function getRandom(arr) {
  var index = Math.floor(Math.random() * arr.length);
  var element = arr[index];
  return element;
}
 // TO-DO: New function to take our password options (array for storing password, storing possible characters, storing guaranteed characters)
 function passwordOptions(passwordObj) {
   var storedPassword = [];
   var possibleCharacters = [];
   var guaranteedCharacters = [];
   // if no object is received, exit out of the function
   if (!passwordObj) return null;
  // merge arrays with concat
   if (passwordObj.lowercase) {
      possibleCharacters = possibleCharacters.concat(lowerList);
      guaranteedCharacters.push(getRandom(lowerList));
   } if (passwordObj.uppercase) {
      possibleCharacters = possibleCharacters.concat(upperList);
      guaranteedCharacters.push(getRandom(upperList));
   } if (passwordObj.numeric) {
      possibleCharacters = possibleCharacters.concat(numberList);
      guaranteedCharacters.push(getRandom(numberList));
   } if (passwordObj.special) {
      possibleCharacters = possibleCharacters.concat(specialList);
      guaranteedCharacters.push(getRandom(specialList));
   }
    for(i = 0; i < passwordObj.passwordLength; i++) {
      var randomCharacter = getRandom(possibleCharacters);
      storedPassword.push(randomCharacter);
      console.log(storedPassword);
    }
    for(i = 0; i < guaranteedCharacters.length; i++) {
      storedPassword[i] = guaranteedCharacters[i];
    }
    // converts array into a string
    return storedPassword.join("");
 }
 // TO-DO: Return final array as a string (array that password is stored in)
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
