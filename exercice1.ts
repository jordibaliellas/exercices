type InputType = string | number;

const highestOccurrence = (input: InputType[]): (string | number)[] => {
  let maxCount = 0;

  const countItems: { [key in InputType]: number } = input.reduce((pv, crr) => {
    pv[crr] = pv[crr] ? ++pv[crr] : 1;
    if (pv[crr] > maxCount) maxCount = pv[crr];
    return pv;
  }, {} as { [key in InputType]: number });

  return Object.keys(countItems).filter((key) => countItems[key] === maxCount);
};

console.log(highestOccurrence([2, 3, 2, 2, 2, 4, 2]));
// [2]

console.log(highestOccurrence([2, 3, 2, 3, 2, 3, 4]));
// [2, 3]

console.log(highestOccurrence(["a", "b", "c", "a", "a", "a", "a"]));
// ['a']

console.log(highestOccurrence(["a", "a", 2, 2, 2, "a", 4]));
// ['a', 2]
