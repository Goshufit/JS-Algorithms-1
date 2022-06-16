// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  //Split method turns a string into an array it takes in a seperator value if you put in '' it will
  // take single letters but if you put in ' ' with a space it takes the whole word//
  //   const strArr = str.split('');
  //   //The array reverse method reverses an array//
  //   strArr.reverse();
  // //The join method turns an array into a string//
  //   return strArr.join('');

  //Clean version//

  // return str
  //   .split('')
  //   .reverse()
  //   .join('');

  //For loop version//

  //   let revString = '';
  //   //Make sure to subtract 1 from string length because it will start at a 0 
  //   //index giving more than the length of the string the .length method starts at the number 0//
  //   // for(let i = str.length - 1; i >= 0; i--) {
  //   //   revString = revString + str[i];
  //   // }
  //   // return revString;

  //   //or

  //   for(let i = 0; i <= str.length - 1; i++) {
  //       revString = str[i] + revString;
  //     }
  //     return revString; 

  //or 'for..of' loop a more up to date algorithm
  //When the loop does trough the work rather than it looping and keeping the position of the letter or number it hits 
  //the first letter and logs it then the second and so on for instance first loop 'h' 
  //second loop 'e' but instead of it being 'he' it is 'eh' because it loops and grabs them one time per loop.

  // let revString = '';
  // for (let char of str) {
  //   revString = char + revString;
  // }
  // return revString;


  //High order array function technique//

  //forEach()

  // let revString = '';
  // str.split('').forEach(char =>
  //   revString = char + revString
  // );
  // return revString;

  //reduce()

  return str.split('').reduce((revString, char) =>
    char + revString, '');
}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) { }



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) { }



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) { }



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) { }



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() { }



// Call Function
const output = reverseString('hello');

console.log(output);