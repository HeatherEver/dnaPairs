// function dnaPairs4(dna) {
//   if (dna.length === 0) return [];
// }

// ***** NOT USING THIS ONE AS INSTANTLY PASSES LOWERCASE TEST******
// function dnaPairs4(dna) {
//   if (dna.length === 0) return [];

//   return ["G", "C"]; <--- this passed the lowercase test so might not ues this
// }

// function dnaPairs4(dna) {
//   if (dna.length === 0) return [];
//   dna = dna.toUpperCase();

//   if (dna === "G") return [["G", "C"]];
// }

function dnaPairs4(dna) {
  if (dna.length === 0) return [];
  dna = dna.toUpperCase();
  const lookupPairs = {
    G: ["G", "C"],
    T: ["T", "A"],
    // would we just add all of them in here at this step?
  };
  const pairs = [];

  for (let i = 0; i < dna.length; i++) {
    pairs.push(lookupPairs[dna[i]]);
  }
  return pairs;
}

module.exports = dnaPairs4;
