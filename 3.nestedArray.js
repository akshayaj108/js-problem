const arr = [23, 45, [23, 6, [67, [34, 67, [34], [67, 98]]]]];
let log = console.log;
const newArr = [];
const mergeArray = (arr) => {
  for (let element of arr) {
    //iterate over the elements in the array
    if (Array.isArray(element)) {
      //if it is not an array push it to the new array
      mergeArray(element);
    } else {
      newArr.push(element);
    }
  }
  log(newArr);
};

mergeArray(arr);
