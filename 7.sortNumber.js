const arr = [23, 45, 6, 8, 0, 1, 5, 89];
//[23,6,45,8]

const sortInAscending = (arr) => {
  if (arr.length === 0) {
    throw new Error("Enter in array form");
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let temp;
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
  return arr;
};
const sortInDescending = (arr) => {
  if (arr.length === 0) {
    throw new Error("Enter in array form");
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let temp;
      if (arr[i] < arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
  return arr;
};

let numbers = [4, 2, 7, 1, 9, 5];
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  console.log(left, right);
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const sortedNumber = quickSort(arr);
console.log(sortedNumber);
// sortInAscending(arr);
// sortInDescending(arr);
