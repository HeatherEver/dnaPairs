function dnaPairs2(dna) {
  if (dna.length === 0) return [];

  const splitDNA = dna.split("");
  const pairs = [];

  splitDNA.forEach((letter) => {
    if (letter === "G") pairs.push(["G", "C"]);
    if (letter === "T") pairs.push(["T", "A"]);
    if (letter === "A") pairs.push(["A", "T"]);
    if (letter === "C") pairs.push(["C", "G"]);
  });

  return pairs;
}

module.exports = dnaPairs2;
