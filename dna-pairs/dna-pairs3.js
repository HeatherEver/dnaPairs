function dnaPairs3(dna) {
  if (dna.length === 0) return [];
  const dnaPairs = {
    T: ["T", "A"],
    A: ["A", "T"],
    G: ["G", "C"],
    C: ["C", "G"],
  };
  const pairs = [];

  for (let i = 0; i < dna.length; i++) {
    pairs.push(dnaPairs[dna[i]]);
  }

  return pairs;
}

module.exports = dnaPairs3;
