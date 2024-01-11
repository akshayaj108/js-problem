let str = "ajsfhjsah*wioeurwieur*cxbvx*wpeorerw*dsfjhjkfg";
function replaceChar(str) {
  // Split the string into parts using "*"
  let parts = str.split("*");
  str = "";
  for (let i = 0; i < parts.length; i++) {
    //length-1 write because we dont concat/replace "#" after last element of array
    if (parts.length - 1 == i) {
      str = str + parts[i];

      //below code for replacing last "#"" with "*""
      let res = str.split("");
      res.splice(res.lastIndexOf("#"), 1, "*");
      str = res.join("");
    } else {
      str = str + parts[i] + "#";
    }
  }
  console.log("Replace Character -", str);
}
replaceChar(str);
