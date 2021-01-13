// Binary Search

// function binarySearch(array, value, start, end) {
//   var start = start === undefined ? 0 : start;
//   var end = end === undefined ? array.length : end;

//   if (start > end) {
//     return -1;
//   }

//   const index = Math.floor((start + end) / 2);
//   const item = array[index];

//   console.log(start, end);
//   if (item == value) {
//     return index;
//   } else if (item < value) {
//     return binarySearch(array, value, index + 1, end);
//   } else if (item > value) {
//     return binarySearch(array, value, start, index - 1);
//   }
// }

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length;

  while (right > left) {
    const indexToCheck = Math.floor((left + right) / 2);
    const checking = arr[indexToCheck];
    console.log(`indexToCheck equals: ${indexToCheck}`);

    if (checking === target) {
      return indexToCheck;
    } else if (target > checking) {
      left = indexToCheck + 1;
    } else {
      right = indexToCheck;
    }
  }
  return null;
};

const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
const target = 2;

const targetIndex = binarySearch(searchable, target);

console.log(`The target index is ${targetIndex}.`);

module.exports = { binarySearch };

// In a DFS you start from a given node (usually the root) and traverse as far as you can down. When
// you reach a node, which has no children to visit or all nodes on its path have been visited, you start
// backtracking.Let's take a look at how this works. To start, let's set up a basic binary tree structure
// from previous BST lesson:
