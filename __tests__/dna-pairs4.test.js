const dnaPairs4 = require("../dna-pairs/dna-pairs4");

describe("dnaPairs4 Tests", () => {
  test("when passed an empty string return an empty array", () => {
    expect(dnaPairs4("")).toEqual([]);
  });
  test("when passed a single valid letter return it's pair in a nested array", () => {
    expect(dnaPairs4("G")).toEqual([["G", "C"]]);
  });
  test("when passed a single valid letter in lowercase return it's pair in a nested array", () => {
    expect(dnaPairs4("g")).toEqual([["G", "C"]]);
  });
  test("when passed two valid letters return their pair's in a nested array", () => {
    expect(dnaPairs4("GT")).toEqual([
      ["G", "C"],
      ["T", "A"],
    ]);
  });
  test("when passed an invalid letter return an empty array", () => {
    expect(dnaPairs4("X")).toEqual([]);
  });
});
