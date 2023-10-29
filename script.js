// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options

function getPasswordOptions() {   // This function asks user some inputs and stores their input in a variable. The input values is added  and stores in new variable. 
  var length = parseInt(prompt("Enter the length of password(must be a number between 8 and 128)"));// This prompt asks user to select the length of the password.

  if(!( typeof length === "number" && length >=8 && length<=128)){  // This if statement alerts the users if the length of the password is not between 8 ,128 or alerts if its not a number.
    alert("length of the password should be between 8 and 128");
    return;  // if this statement is true this returns the alert and exits the function.
  }

  
  var specialchar = confirm("Do you want to include special characters in your password????");  // confirms with the user wheather user wants to include special characters in his password or not and stores this answer in other variable. 
  var lowerChar = confirm("Do you want to include lower case letters in your password????");   // confirms with the user wheather user wants to include lower case letters in his password or not and stores this answer in other variable.
  var upperChar = confirm("Do you want to include upper case letters in your password????");  // confirms with the user wheather user wants to include upper case letters in his password or not and stores this answer in other variable.
  var numbers = confirm("Do you want to include numbers in your password????");              // confirms with the user wheather user wants to include numbers in his password or not and stores this answer in other variable.

  if(!specialchar && !lowerChar && !upperChar && !numbers){  // if the user doesn't select any of the above asked questions then the alert function alerts the user to select atleast one character to include in password.
    alert("Please select atleast characters for your password");  // alerts the user
    return;  // if this statement is true this returns the alert and exits the function.
  }

  var new_password = []; // variable new_password is initially declars an empty array.

  if(specialchar){  // This if statement stores the user input if users wants to and adds that input to new_password variable.
    new_password = new_password.concat(specialCharacters);  // concatinates the user input to new_password variable. Now new_password variable is not empty array.
  }
  if(lowerChar){   // This if statement stores the user input if users wants to and adds that input to new_password variable.
    new_password = new_password.concat(lowerCasedCharacters);   // concatinates the user input to new_password variable.
  }
  if(upperChar){  // This if statement stores the user input if users wants to and adds that input to new_password variable.
    new_password = new_password.concat(upperCasedCharacters);   // concatinates the user input to new_password variable.
  }
  if(numbers){  // This if statement stores the user input if users wants to and adds that input to new_password variable.
    new_password = new_password.concat(numericCharacters);    // concatinates the user input to new_password variable.
  }
  return [new_password,length]  // returns two values so that we can use them in any function if getPasswordOptions function is called.
}


// Function for getting a random element from an array
function getRandom(arr) {  // This is a function which generates random variables
    var randomNumber = Math.floor(Math.random()*arr.length);  // Math.floor always rounds down and returns the largest integer and Math.random returns a decimal number that's greater than or equal to 0 and less than 1. Based on array length the random number is generated and stores in a new variable.
    return arr[randomNumber]; // returns random numbers based on iput of user and this works when getRandom function is called.
}

// Function to generate password with user input
function generatePassword() {  //This function adds all the random characters generated in getRandom function to new varaiable and returns it to user.
    var variable = getPasswordOptions();  // new variable is declared to call getPasswordOptions function.
    var newPassword = "";  // The final output is initially declared as empty.
    for(var i=0; i<variable[1] ; i++ ){  // This for loop itterates based on user input of length and returns a random password
      newPassword += getRandom(variable[0]) //adds randomly generated characters to the empty variable based on length of the password and keeps itterating until the condition is false and returns the final answer.
    }
    return newPassword; // returns the final random password if the condition is false and exits the function.
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {  // This function displays the input on the screen to user.
  var password = generatePassword();  //calling the generatePassword function to display the final output to user.
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);



