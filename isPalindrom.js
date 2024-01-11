let str = "ABCDCBA";

function checkPalidrome(str) {
  const string = str.split("");
  string.every((ele, i) => {
    console.log(
      "Logic log ",
      str.length - i - 1,
      "str.length ",
      str.length,
      "i  ",
      i
    );
    return ele === str[str.length - i - 1];
  });
}
console.log(checkPalidrome(str));
