const dnaPairs3 = require("../dna-pairs/dna-pairs3");

describe("DNA Pairs Tests", () => {
  test("when passed an empty string, return an empty array", () => {
    expect(dnaPairs3("")).toEqual([]);
  });
  test("when passed a single letter (G) return a nested array of ['G', 'C']", () => {
    expect(dnaPairs3("G")).toEqual([["G", "C"]]);
  });
  test("when passed two letters (GT) return a nested array of their pairs", () => {
    expect(dnaPairs3("GT")).toEqual([
      ["G", "C"],
      ["T", "A"],
    ]);
  });
  test("when passed multiple letters return a nested array of their pairs", () => {
    expect(dnaPairs3("GTA")).toEqual([
      ["G", "C"],
      ["T", "A"],
      ["A", "T"],
    ]);
    expect(dnaPairs3("ATAG")).toEqual([
      ["A", "T"],
      ["T", "A"],
      ["A", "T"],
      ["G", "C"],
    ]);
  });
  expect(dnaPairs3("TCAG")).toEqual([
    ["T", "A"],
    ["C", "G"],
    ["A", "T"],
    ["G", "C"],
  ]);
});
