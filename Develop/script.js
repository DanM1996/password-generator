// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

};
function generatePassword() {
  var passwordLength = prompt("Choose a length for your password between 8 and 128 characters");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid option");
    // reset the function until the user enters a proper value
    console.log("still stuck");
    return generatePassword();
  }; 

  if (passwordLength >= 8 && passwordLength <= 128) {
    var lowercase = confirm("Would you like your password to contain lowercase letters?");
    var uppercase = confirm("Would you like your password to contain uppercase letters? ");
    var numeric = confirm("Would you like your password to contain numeric values?");
    var special = confirm("Would you like your password to contain special characters?")
    console.log(passwordLength, lowercase, uppercase, numeric, special);
  }  
  
    
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
