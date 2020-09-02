/* eslint-disable no-undef */
import { storeState, changeState, stateGenerator } from "./../src/haiku.js";

describe("Haiku", () => {
  const wordHaiku = storeState();
  const haiku = {
    firstLine: "Epicodus is fun",
    secondLine: "We are learning to program",
    thirdLine: "So we can get jobs",
  };
  // const syllableCount = storeState();

  test("should count the number of syllables in a string", () => {
    expect(syllableCount(haiku.firstLine).toBe(5));
    expect(syllableCount(haiku.secondLine).toBe(7));
    expect(syllableCount(haiku.thirdLine).toBe(5));
  });
});
