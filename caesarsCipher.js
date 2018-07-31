// caesarsCipher.js

// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();

function rot13(str) { // LBH QVQ VG!
  var deciphered = '';

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    var currentCharIndex = alphabet.indexOf(char);
    var rotatedIndex = currentCharIndex + 13;

    if (currentCharIndex > -1) {
      deciphered += alphabet[rotatedIndex % alphabet.length];
    } else {
      deciphered += str[i];
    }

  }

  return deciphered;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"), 'should decode to FREE CODE CAMP');
console.log(rot13("SERR CVMMN!"), 'should decode to FREE PIZZA!');
console.log(rot13("SERR YBIR?"), 'should decode to FREE LOVE?');
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."), 'should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');