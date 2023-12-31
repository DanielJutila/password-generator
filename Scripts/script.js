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


//Character types to be added to Strings
var characterTypes = {
  lowerCase: 'abcdefghijklmnopqrstuvwxyz',
  upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numeric: '0123456789',
  specialCharacters: '!@#$%^&*()_+-<>/[]{}|~',
};
//Password data
var passData = {
  length: 0,
  lowerCase: true,
  upperCase: true,
  numeric: true,
  specialCharacters: true
}

function generatePassword() {
  resetPassData();
  //stop rest of function running if pass is not 8-128
  var length = prompt("How long would you like your password to be");
  if (length < 8 || length > 128) {
    alert("Must be between 8-128 characters!")
    return generatePassword();
  } else {
    passData.length = length;
    passCharacterTypes();
    //Checks to see if at least 1 is true
    if (!passData.lowerCase &&
      !passData.upperCase &&
      !passData.numeric &&
      !passData.specialCharacters
      ) {
      alert("You need to select one option");
      generatePassword();
    } else {
      makePassWord(); 
    }
    console.log(pass);
    return pass;
  }
}
var pass = '';

function resetPassData() {
  passArray = [];
  pass = ''
  passData.length = 0;
}

//Loops through the array and picks out random letters
function makePassWord() {
  for (var i = 0; i < passData.length; i++) {
    pass += passArray[Math.floor(Math.random() * passArray.length)];
  }
  return;
}

//Loops through all character types in object and concats string to array
function passCharacterTypes() {
  for (var type in characterTypes) {
    if (confirm("Do you want your password to contain " + type + " ?")) {
      passData[type] = true;
      passArray = passArray.concat(characterTypes[type].split(""))
    } else {
      passData[type] = false;
    }
  }
}