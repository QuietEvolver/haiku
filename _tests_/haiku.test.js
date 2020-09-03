/* eslint-disable no-undef */
import { syllableCount } from "./../src/haiku.js";

describe("syllableCount", () => {
  // const wordHaiku = storeState();
  const haiku = {
    firstLine: "Epicodus rocks",
    secondLine: "We are learning to program",
    thirdLine: "So we can get jobs",
  };
  // const syllableCount = storeState();

  test("should count the number of syllables in a string", () => {
    expect(syllableCount(haiku.firstLine)).toBe("5 syllables");
    expect(syllableCount(haiku.secondLine)).toBe("7 syllables");
    expect(syllableCount(haiku.thirdLine)).toBe("5 syllables");
  });
});
