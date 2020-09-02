const wordIntake = ``; //pls show me how to do it the way you saw it w/the const=fxn=fatarrow

/*
 - vowel count: account for every word's vowel input 
 - if a word ends in (silent) 'e': if last letter is an 'e', subtract 1 from syllables
- diphthongs: account for iterations of double vowels found
*/
const syllableCount = (wordIntake) => {
  let syllables = 0;
  for (let i = wordIntake.length; i > 0; i--) {
    if (
      charAt(i) == "a" ||
      charAt(i) == "e" ||
      charAt(i) == "i" ||
      charAt(i) == "o" ||
      charAt(i) == "u"
    ) {
      if (
        charAt(i + 1) != "a" &&
        charAt(i + 1) != "e" &&
        charAt(i + 1) != "i" &&
        charAt(i + 1) != "o" &&
        charAt(i + 1) != "u"
      ) {
        syllables++;
      }
    }
  }
  if (charAt(wordIntake.length - 1) == "e") {
    syllables--;
  }
  return syllables + " syllables";
};
