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
  if (passwordLength >= 8 && passwordLength <= 128) {
    prompt("Would you like your password to contain lowercase letters?")
    console.log("this works");
  }  
  else {
      alert("Please enter a valid option");
      // reset the function until the user enters a proper value
      console.log("still stuck");
      return generatePassword();
      
    }; 
    
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
