const arr = [23, 45, 6, 8, 0, 1, 5, 89];
const maxNumber = (arr) => {
  if (arr.length === 0) {
    throw new Error("Enter in array form");
  }
  let isMax = 0;
  for (let e of arr) {
    if (e > isMax) isMax = e;
  }
  console.log(isMax);
};
maxNumber(arr);
