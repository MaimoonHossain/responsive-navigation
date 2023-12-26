function findIndicesWithSum(numbers, targetSum) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const currentSum = numbers[left] + numbers[right];

    if (currentSum === targetSum) {
      return [left, right];
    } else if (currentSum < targetSum) {
      left++;
    } else {
      right--;
    }
  }

  return null;
}

const numbersList = [1, 2, 4, 7, 11, 15];
const target = 15;

const result = findIndicesWithSum(numbersList, target);

if (result) {
  console.log(`Indices with sum ${target}: [${result}]`);
} else {
  console.log('No indices found.');
}
