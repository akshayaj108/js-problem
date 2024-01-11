let str = "Hi akshay Jadhao";

function reverse(str) {
  let char = "";
  for (let letter of str) {
    char = letter + char;
  }
  console.log("Reverse Order  " + char);
}
reverse(str);
