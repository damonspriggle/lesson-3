// Special characters for the function created
const specialCharacters = "!@#$%^&*()";

// genertating clickable button
const generateButton = document.getElementById('generateBtn');
generateButton.addEventListener('click', writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// generate password prompts
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 12 but less than 128.");
// password bug 
  if (passwordLength === "" || passwordLength === null) {
    window.alert("Please enter in a number between 1 and 128!");
    return generatePassword();
  } 
// rest of variables 
  var numbers = confirm("Numbers Included in your Password?");
  var lowerCases = confirm("Lowercase Letters Included in your Password?");
  var upperCases = confirm("Uppercase Letters Included in your Password?");
  var special = confirm("Special Characters Included in your Password?");

 // Minuimum counts
  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";
  var minimumCount = 0;

  // Generator functions
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }
};

  // check all variables

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;
  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;
  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;
  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;
  }
  var randomPasswordGenerated = "";

  // password character generator 
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumber = Math.floor(Math.random() * 4);
    randomPasswordGenerated += randomNumber;
  }

  // characters added to password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;
  return randomPasswordGenerated;
};

writePassword();