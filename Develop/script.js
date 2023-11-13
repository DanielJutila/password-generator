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

var passAray = [];
var nonCaps = 'abcdefghijklmnopqrstuvwxyz';
var caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbys = '0123456789'
var specialCharacters = '!@#$%^&*()_+-<>/[]{}|~';


var passData = {
  length: 0,
  lowercase: true,
  uppercase: true,
  numeric: true,
  specialChar: true
}

function generatePassword() {
  passQuestions();
  return pass;
}

//If you select wrong number of characters, It loops through all options twice??


var pass = '';
function makePassWord() {
  for (var i = 0; i < passData.length; i++) {
    pass += passAray[Math.floor(Math.random() * passAray.length)];
  }
  return;
}


function passQuestions() {
  passAray = [];
  pass = ''
  passData.length = 0;
  //Check Length of password
  var length = prompt("How long would you like your password to be");
  if (length < 8 || length > 128) {
    alert("Your password must be between 8 - 128 characters");
    generationFunction();
  } else {
    passData.length = length;
  }

  //check LowerCase
  var lowerCase = confirm("Do you want your password to contain lowercase");
  if (lowerCase) {
    passData.lowercase = true;
    var nc = [] = nonCaps.split("");
    passAray = passAray.concat(nc);

  } else {
    passData.lowercase = false;
  }


  //check upperCase
  var upperCase = confirm("Do you want your password to contain uppercase");
  if (upperCase) {
    passData.uppercase = true;
    var c = [] = caps.split("");
    passAray = passAray.concat(c);

  } else {
    passData.uppercase = false;
  }


  //Check numeric
  var numbers = confirm("Do you want your password to contain numbers");
  if (numbers) {
    passData.numeric = true;
    var n = [] = numbys.split("");
    passAray = passAray.concat(n);
  } else {
    passData.numeric = false;
  }

  //Check SpecialChar
  var specChar = confirm("Do you want your password to contain special characters");
  if (specChar) {
    passData.specialChar = true;
    var sc = [] = specialCharacters.split("");
    passAray = passAray.concat(sc);
  } else {
    passData.specialChar = false;
  }

  if (!passData.lowercase &&
    !passData.uppercase &&
    !passData.numeric &&
    !passData.specialChar
  ) {
    alert("You need to select one option");
    generationFunction();
  } else {
    makePassWord();
  }

  return;
}

