// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var special = "!@#$%^&*()?.<\>|=+:;,[-_]"
  var numbers = "0123456789"
  var typePassword = [""]

  var passwordLength = prompt("Password must be between 8 and 128 characters! Type below to continue.");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password does not meet the critia");
    var passwordLength = prompt("Password must be between 8 and 128 characters of length.");
  }
  var lowerConfirm = confirm("Will the password include a lowercase letters? Click ok to continue.");
  if (lowerConfirm === true) {
    for (var i = 0; i < lowercase.length; i++) {
      typePassword.push(lowercase[i]);
    }
    console.log(typePassword)
  }
  var upperConfirm = confirm("Will the password include an uppercase letters? Click ok to continue.");
  if (upperConfirm === true) {
    for (var i = 0; i < uppercase.length; i++) {
      typePassword.push(uppercase[i]);
    }
    console.log(typePassword)
  }
  var specialConfirm = confirm("Will the password include a special character? Click ok to continue.");
  if (specialConfirm === true) {
    for (var i = 0; i < special.length; i++) {
      typePassword.push(special[i]);
    }
    console.log(typePassword)
  }
  var numbersConfirm = confirm("Will the password include a number? Click ok to continue.");
  if (numbersConfirm === true) {
    for (var i = 0; i < numbers.length; i++) {
      typePassword.push(numbers[i]);
    }
    console.log(typePassword)
  }

  var finalPassword = ""

  const confirmlength = parseInt(passwordLength);

  for (var i = 0; i < confirmlength; i++) {
    typePassword[Math.floor(Math.random() * typePassword.length)];
    finalPassword += typePassword[Math.floor(Math.random() * typePassword.length)];
  }
  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);