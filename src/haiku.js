const wordIntake = ``; //pls show me how to do it the way you saw it w/the const=fxn=fatarrow

/*
 - vowel count: account for every word's vowel input 
 - if a word ends in (silent) 'e': if last letter is an 'e', subtract 1 from syllables
- diphthongs: account for iterations of double vowels found
*/
const syllableCount = (wordIntake) => {
  let syllables = 0;
  for (let i = wordIntake.length; i > 0; i--) {
    if (charAt(i) == 'a' || charAt(i) == 'e' || charAt(i) == 'i' || charAt(i) == 'o' || charAt(i) == 'u') {
      syllables++;
    }

    if (charAt(i) == ('a' || 'e') && charAt(i+1) == 'a' || 'e' || 'i' || 'o' || 'u')
  }
  if (charAt(wordIntake.length -1) == 'e') {
    syllables--;
  }
};
