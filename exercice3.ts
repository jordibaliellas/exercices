const averagePair = (input: Array<number>, target: number): boolean => {
  return input.some((item, index) => {
    let avgHigher = false;
    return input.some((compareItem, compareIndex) => {
      if (compareIndex <= index || avgHigher) return false;
      const avg = (compareItem + item) / 2;
      if (avg > target) avgHigher = true;
      return avg === target;
    });
  });
};

console.log(averagePair([1, 2, 3], 2.5));
// true

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
// true

console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
// false

console.log(averagePair([], 4));
// false
