const dnaPairs = require("../dna-pairs/dna-pairs");

describe("DNA Pairs Tests", () => {
  test("when passed an empty string, return an empty array", () => {
    expect(dnaPairs("")).toEqual([]);
  });
  test("when passed a single letter (G) return a nested array of ['G', 'C']", () => {
    expect(dnaPairs("G")).toEqual([["G", "C"]]);
  });
  test("when passed two letters (GT) return a nested array of their pairs", () => {
    expect(dnaPairs("GT")).toEqual([
      ["G", "C"],
      ["T", "A"],
    ]);
  });
  test("when passed multiple letters return a nested array of their pairs", () => {
    expect(dnaPairs("GTA")).toEqual([
      ["G", "C"],
      ["T", "A"],
      ["A", "T"],
    ]);
    expect(dnaPairs("ATAG")).toEqual([
      ["A", "T"],
      ["T", "A"],
      ["A", "T"],
      ["G", "C"],
    ]);
  });
  expect(dnaPairs("TCAG")).toEqual([
    ["T", "A"],
    ["C", "G"],
    ["A", "T"],
    ["G", "C"],
  ]);
  test("when passed multiple random letters return only the dna pairs in a nested array", () => {
    expect(dnaPairs("GTXGA")).toEqual([
      ["G", "C"],
      ["T", "A"],
      ["G", "C"],
      ["A", "T"],
    ]);
    expect(dnaPairs("XDTFA")).toEqual([
      ["T", "A"],
      ["A", "T"],
    ]);
  });
  test("when passed all incorrect letters return empty array", () => {
    expect(dnaPairs("XXDBN")).toEqual([]);
  });
});
