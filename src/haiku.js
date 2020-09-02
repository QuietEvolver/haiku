/* eslint-disable no-undef */
/*
 - vowel count: account for every word's vowel input 
 - if a word ends in (silent) 'e': if last letter is an 'e', subtract 1 from syllables
- diphthongs: account for iterations of double vowels found
- solve for long 'e' in We. vowel/consonant/silent'e'.
- solve for 'are' exception
*/

export const syllableCount = (wordIntake) => {
  let syllables = 0;
  let wordArray = wordIntake.toLowerCase().split(" ");

  wordArray.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      if (
        word.charAt(i) == "a" ||
        word.charAt(i) == "e" ||
        word.charAt(i) == "i" ||
        word.charAt(i) == "o" ||
        word.charAt(i) == "u"
      ) {
        if (
          word.charAt(i + 1) != "a" &&
          word.charAt(i + 1) != "e" &&
          word.charAt(i + 1) != "i" &&
          word.charAt(i + 1) != "o" &&
          word.charAt(i + 1) != "u"
        ) {
          syllables++;
        }
      }
    }

    if (
      word.charAt(0) == "a" ||
      word.charAt(0) == "e" ||
      word.charAt(0) == "i" ||
      word.charAt(0) == "o" ||
      word.charAt(0) == "u"
    ) {
      if (word.length > 2 && word.charAt(word.length - 1) == "e") {
        syllables--;
      }
    }
  });
  return `${syllables} syllables`;
};
