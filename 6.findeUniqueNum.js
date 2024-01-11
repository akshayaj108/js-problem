function sumOfUniqueNum(array) {
  let newArr = [];
  if (array.length) {
    let i = 0;

    for (let j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
      // console.log(i); //[1, 2, 3, 4, 5, 6, 7, 8,9];
      newArr[i] = array[j];
    }

    console.log(newArr);
    return i + 1;
  } else {
    throw new Error("Array is Empty");
  }
}
const findSumOfUnique = sumOfUniqueNum([
  1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 6, 7, 7, 7, 7, 8, 8, 9,
]);
console.log(findSumOfUnique);
