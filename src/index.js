// Iterative approach
function fibs(num) {
  if (num <= 0) return [];
  if (num === 1) return [0];

  const array = [0, 1];

  for (let i = 2; i < num; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }
  return array;
}

// Recursive approach
function fibsRec(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const array = fibsRec(n - 1);

  array.push(array[array.length - 1] + array[array.length - 2]);

  return array;
}

// MergeSort function
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  // Split array into two halve
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  // Recursively sort halve and merge them
  return merge(mergeSort(left), mergeSort(right));
}

// Function to merge arrays
function merge(left, right) {
  const mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements in sorted halves and merge
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add remaining elements from left and right halfs
  mergedArray.push(...left.slice(leftIndex));
  mergedArray.push(...right.slice(rightIndex));

  return mergedArray;
}

console.table(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.table(mergeSort([105, 79, 100, 110, 6]));
