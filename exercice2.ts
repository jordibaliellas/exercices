const maxSubarraySum = (input: Array<number>, num: number): number | null => {
  return (
    input.reduce((pv, cv, i, array) => {
      const cloneArray = array.slice();

      const currentSum = cloneArray
        .splice(i, num)
        .reduce((pv, crr) => pv + crr, 0);

      return currentSum > pv ? currentSum : pv;
    }, 0) || null
  );
};

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
// 17

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
// 10

console.log(maxSubarraySum([4, 2, 1, 6], 1));
// 6

console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
// 13

console.log(maxSubarraySum([], 4));
// null
