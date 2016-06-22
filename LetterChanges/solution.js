/**
 * Solution
 */


/**
 * [LetterChanges function to return the next alphabet of a given word]
 * @param {[string]} str [string to be used]
 */
function LetterChanges(str) {
  let newLetter = '',
	 letter = '',
	 len = str.length;
	 str = str.toLowerCase();
  for (let i=0; i<len; i++) {
    if (str[i].match(/[a-z]/i)) {
      if (str.charCodeAt(i) === 122) newLetter = changeVowel('a');
      else {
	letter = getAscii(str[i]);
	newLetter += changeVowel(getChar(letter));
      }
    }
    else newLetter += str[i];
  }
  return newLetter;
}

/**
 * [getAscii function to get the ascii value of an alphabet]
 * @param  {[string]} word [alphabet to be converted to its ascii value]
 * @return {[number]}      [ascii value of the word]
 */
function getAscii(word) {
  return word.charCodeAt(0) + 1;
}

/**
 * [getChar function to convert an ascii value to its corresponding alphabet]
 * @param  {[ascii value]} word [ascii code of an alphabet]
 * @return {[string]}      [alphabet corresponding to the ascii code passed]
 */
function getChar(word) {
  return String.fromCharCode(word);
}

/**
 * [changeVowel to change a vowel to upper case]
 * @param  {[strinh]} word [word to be checked]
 * @return {[string]}      [if vowel, an uppercase vowel, if not, the word]
 */
function changeVowel(word) {
  let vowels = 'aeiou',
    len = vowels.length;
  for (let i=0; i<len; i++) {
    if (word === vowels[i]) {
      return word.toUpperCase();
    }
  }
  return word;
}
