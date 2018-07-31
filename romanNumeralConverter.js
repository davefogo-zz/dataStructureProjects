// romanNumeralConverter.js

// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.
// Get the unique roman numerals in an object
  // get the number of digits
  // divide into sections of 1 digit 2 digits 3 digits 4 digits
  // divide into sub sections of numbers that don't have unique letters
    // deduct numbers and add to str until done
  //return roman num

function convertToRoman(num) {
  var romanNum = '';
  var romanNums = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  }

  if (romanNums[num]) {
    romanNum += romanNums[num];
    num -= num;
  }

  if (num === 0) {
    return romanNum;
  } else if (num > 1 && num < 5) {
    romanNum += 'I';
    num -= 1;
  } else if (num > 5 && num < 9) {
    romanNum += 'V';
    num -= 5;
  } else if (num > 10 && num < 40) {
    romanNum += 'X';
    num -= 10;
  } else if (num > 40 && num < 50) {
    romanNum += 'XL';
    num -= 40;
  } else if (num > 50 && num < 90) {
    romanNum += 'L';
    num -= 50;
  } else if (num > 90 && num < 100) {
    romanNum += 'XC';
    num -= 90;
  } else if (num > 100 && num < 400) {
    romanNum += 'C';
    num -= 100;
  } else if (num > 400 && num < 500) {
    romanNum += 'CD';
    num -= 400;
  } else if (num > 500 && num < 900) {
    romanNum += 'D';
    num -= 500;
  } else if (num > 900 && num < 1000) {
    romanNum += 'CM';
    num -= 900;
  } else if (num > 1000) {
    romanNum += 'M';
    num -= 1000;
  }

  //recursive case
  return romanNum += convertToRoman(num);
}

convertToRoman(36)
console.log(convertToRoman(2), 'should return "II".');
console.log(convertToRoman(3), 'should return "III".');
console.log(convertToRoman(4), 'should return "IV".');
console.log(convertToRoman(5), 'should return "V".');
console.log(convertToRoman(9), 'should return "IX".');
console.log(convertToRoman(12), 'should return "XII".');
console.log(convertToRoman(16), 'should return "XVI".');
console.log(convertToRoman(29), 'should return "XXIX".');
console.log(convertToRoman(44), 'should return "XLIV".');
console.log(convertToRoman(45), 'should return "XLV"');
console.log(convertToRoman(68), 'should return "LXVIII"');
console.log(convertToRoman(83), 'should return "LXXXIII"');
console.log(convertToRoman(97), 'should return "XCVII"', '97');
console.log(convertToRoman(99), 'should return "XCIX"', '99');
console.log(convertToRoman(400), 'should return "CD"');
console.log(convertToRoman(500), 'should return "D"');
console.log(convertToRoman(501), 'should return "DI"');
console.log(convertToRoman(649), 'should return "DCXLIX"');
console.log(convertToRoman(798), 'should return "DCCXCVIII"');
console.log(convertToRoman(891), 'should return "DCCCXCI"');
console.log(convertToRoman(1000), 'should return "M"');
console.log(convertToRoman(1004), 'should return "MIV"');
console.log(convertToRoman(1006), 'should return "MVI"');
console.log(convertToRoman(1023), 'should return "MXXIII"');
console.log(convertToRoman(2014), 'should return "MMXIV"');
console.log(convertToRoman(3999), 'should return "MMMCMXCIX"');
