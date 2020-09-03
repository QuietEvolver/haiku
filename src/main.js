/* eslint-disable no-unused-vars */
import "./styles.css";
import { syllableCount } from "./haiku";
//TypeErr: null

const haikuFormElem = document.querySelector("#haiku-form");
haikuFormElem.addEventListener("submit", (e) => {
  e.preventDefault();

  const haikuSubmitted = new FormData(haikuFormElem);

  const firstLine = document.getElementById("first-line");
  const secondLine = document.getElementById("second-line");
  const thirdLine = document.getElementById("third-line");
  let haiku = Object.assign({}, firstLine, secondLine, thirdLine);

  const haikuBlob = new Blob(
    haikuSubmitted,
    Blob.prototype.text("#return-haiku-poem")
  );
  //haiku = haikuSubmitted;

  haikuSubmitted.append(firstLine, secondLine, thirdLine, haikuBlob);

  //document.getElementById.haikuSubmitted(haiku); //??

  function haikuChecker() {
    document.getElementById(
      "return-first-line-value"
    ).element.innerHTML = syllableCount(haiku.firstLine);

    document.getElementById(
      "return-second-line-value"
    ).element.innerHTML = syllableCount(haiku.secondLine);

    document.getElementById(
      "return-third-line-value"
    ).element.innerHTML = syllableCount(haiku.thirdLine);
  }

  document.getElementById("haiku-display").element.innerHTML = haikuChecker();
}); //DISPLAY?? let firstLineSyllableCount =  h (syllableCount("First line syllable count is: " + haiku.firstLine + haiku.secondLine + haiku.thirdLine));

//MULT:let new FormData(Object.assign({haiku},firstLine,secondLine,thirdLine)); //IDK if this will work..
