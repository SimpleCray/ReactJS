/**
 * @param {number[]} numbers The array of numbers.
 * @param {number} sum The required target sum.
 * @return {number[]} An array of 2 indices. The indices of the two elements whose sum is equal to sum.

Requirements
    Example case: Correct answer 
    Distinct numbers with and without solutions: Correct answer 
    Duplicate numbers with and without solutions: Correct answer 
    Performance test with a large array of numbers: Time limit exceeded 
 */

 function findTwoSum(numbers, sum) {
    for (let i = numbers.length; i >= 0; i--) {
      const pair = sum - numbers[i];
      console.log(pair);
      const pairIndex = numbers.indexOf(pair);
      numbers.splice(i,1);
      if (pairIndex !== -1 && pairIndex !== i){
        return [i, numbers.indexOf(pair)];
      }
    }
    return null;
  }
  
  const indices = findTwoSum([ 3, 1, 5, 7, 5, 9 ], 10);
  console.log(indices);