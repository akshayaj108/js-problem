// function getSumZero(array) {
//   let outer = 0;
//   let inner = 0;
//   for (let num of array) {
//     outer += 1;
//     console.log(
//       "Outer Loop Run =================================================>",
//       outer
//     );
//     for (let i = 1; i < array.length; i++) {
//       inner += 1;
//       console.log("Inner Loop Run", inner);
//       if (num + array[i] === 0) {
//         return [num, array[i]];
//       }
//     }
//   }
// }
// const result = getSumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
// console.log(result);
//Above code is O(n^2) is quadratic time complexity

// To Improvise or Optimize Code
function OptimizeSumPair(arr) {
  let left = 0;
  let right = arr.length - 1;
  let loopIterated = 0;
  while (left < right) {
    loopIterated += 1;
    console.log("Loop Iterated ", loopIterated);
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
const res = OptimizeSumPair([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(res);
