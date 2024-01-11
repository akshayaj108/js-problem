// // find sum of lagest consecutive no. (means we'll get one array and any number that like ex 3,4 so in that array it will loop and do some operation of number loop elements in a given array)

// function largestConsecutiveSum(array, number) {
//   if (number > array.length) {
//     throw new Array("The Number should be less than array length");
//   }
//   let max = 0;
//   for (let i = 0; i < array.length - number + 1; i++) {
//     let temSum = 0;
//     for (let j = 0; j < number; j++) {
//       console.log("num", i, "j", j);
//       temSum += array[i + j];
//     }
//     if (temSum > max) {
//       max = temSum;
//     }
//   }
//   return max;
// }
// const largestSumOfconsecutive = largestConsecutiveSum(
//   [1, 2, 3, 4, 3, 5, 4, 6, 7, 8],
//   3
// );
// console.log(largestSumOfconsecutive);
const students = [
  { name: "Quincy", grade: 96 },
  { name: "Jason", grade: 84 },
  { name: "Alexis", grade: 100 },
  { name: "Sam", grade: 65 },
  { name: "Katie", grade: 90 },
];
const arr = students.filter((obj, i) => obj.grade > 90);
console.log(arr );
