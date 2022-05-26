// create a function that takes a string
// match each base (letter) with it's pair
// return a nested array

// C pairs with G
// T pairs with A

function dnaPairs(str) {
  if (str.length === 0) return [];
  const pairs = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "G") pairs.push(["G", "C"]);
    if (str[i] === "T") pairs.push(["T", "A"]);
    if (str[i] === "A") pairs.push(["A", "T"]);
    if (str[i] === "C") pairs.push(["C", "G"]);
  }

  return pairs;
}

module.exports = dnaPairs;
