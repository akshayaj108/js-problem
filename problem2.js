// Problem 2. create check Anagram function
// ex. "hello", 'llheo' It will return true
//In anagram first check length if it is same then check all character count if any of this two condition false // then it should return false

function checkAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    console.log("Length is not match");
    return false;
  }
  // count character
  const character = {};
  for (let char of string1) {
    character[char] = (character[char] || 0) + 1;
  }
  console.log(character);
  //compare chracter count
  for (let char2 of string2) {
    if (!character[char2]) return false;
    character[char2] = character[char2]- 1;
  }
  console.log("new Check===", character);
  return true;
}
console.log(checkAnagram("abbaca", "abbaac"));
