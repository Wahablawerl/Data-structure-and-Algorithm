function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: array of length 1 or less is already sorted
  }

  // Divide the array into two halves
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Recursively sort each half
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Copy any remaining elements from left or right
  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Test cases
const arr1 = [3, 2, 1, 13, 8, 5, 0, 1];
const arr2 = [105, 79, 100, 110];

console.log(mergeSort(arr1)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort(arr2)); // Output: [79, 100, 105, 110]
