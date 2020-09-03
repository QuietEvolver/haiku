/* eslint-disable no-unused-vars */
import "./styles.css";
import { syllableCount } from "./haiku";

const haikuSubmitted = new FormData();

const firstLine = document.getElementById("first-line");
const secondLine = document.getElementById("second-line");
const thirdLine = document.getElementById("third-line");
let //haiku = haikuSubmitted;
  haiku = document.getElementById.haikuSubmitted(
    Object.assign({}, ...firstLine, ...secondLine, ...thirdLine)
  );
//haikuSubmitted.append(firstLine, secondLine, thirdLine);
function haikuChecker() {
  document.getElementById("return-first-line-value").innerHTML = syllableCount(
    haiku.firstLine
  );

  document.getElementById("return-second-line-value").innerHTML = syllableCount(
    haiku.secondLine
  );

  document.getElementById("return-third-line-value").innerHTML = syllableCount(
    haiku.thirdLine
  );
}

document.getElementById("haiku-display").innerHTML = haikuChecker();
//DISPLAY?? let firstLineSyllableCount =  h (syllableCount("First line syllable count is: " + haiku.firstLine + haiku.secondLine + haiku.thirdLine));

//MULT:let new FormData(Object.assign({haiku},firstLine,secondLine,thirdLine)); //IDK if this will work..
