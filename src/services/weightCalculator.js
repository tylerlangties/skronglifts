const barWeight = 45; // weight of the bar
const UOM = "lbs"; // unit of measurement, either lbs or kg
const targetWeight = 225; // what we're going to be lifting
const weightsNeeded = (targetWeight - barWeight) / 2; // weight needed on both sides, not counting bar
const availableWeights = []; // total weights we have on hand

const totalWeights = [
  {
    weight: 2.5,
    amount: 2,
  },
  {
    weight: 5,
    amount: 4,
  },
  {
    weight: 10,
    amount: 2,
  },
  {
    weight: 25,
    amount: 2,
  },
  {
    weight: 35,
    amount: 2,
  },
  {
    weight: 45,
    amount: 2,
  },
];

totalWeights.forEach((x) => {
  for (let i = 0; i < x.amount; i++) {
    availableWeights.push(x.weight);
  }
});

function processFinalWeights() {
  // calculate all possible weight combinations
  const weightCombos = Array.from(
    new Set(
      new Array(1 << availableWeights.length)
        .fill()
        .map((e1, i) => availableWeights.filter((e2, j) => i & (1 << j)))
        .map(JSON.stringify)
    ),
    JSON.parse
  );
  const matches = [];
  weightCombos.forEach((combo) => {
    if (combo.reduce((a, b) => a + b, 0) === weightsNeeded) {
      matches.push(combo);
    }
  });
  return {
    weights: matches.reduce((prev, next) =>
      prev.length > next.length ? next : prev
    ),
    UOM,
  };
}

console.log("available weights: ", availableWeights);
console.log("weights needed per side: ", weightsNeeded);
console.log("final weights: ", processFinalWeights());
