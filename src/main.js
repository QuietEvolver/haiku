/* eslint-disable no-unused-vars */
import "./styles.css";
import { syllableCount } from "./haiku";

const haikuSubmitted = new FormData("#haiku-form");
const firstLine = document.getElementById("first-line");
const secondLine = document.getElementById("second-line");
const thirdLine = document.getElementById("third-line");
let haiku = haikuSubmitted;
haiku = document.getElementById.Object.assign(
  {},
  ...firstLine,
  ...secondLine,
  ...thirdLine
);

//let new FormData(Object.assign({haiku},firstLine,secondLine,thirdLine)); //IDK if this will work..

function haikuChecker() {
  document.writeHTML(syllableCount(haiku.firstLine));
  syllableCount(haiku.secondLine);
  syllableCount(haiku.thirdLine);
}
