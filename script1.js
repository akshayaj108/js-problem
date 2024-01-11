const users = [
  { name: "Akshay", age: 26 },
  { name: "AMan", age: 21 },
  { name: "Manish", age: 26 },
  { name: "Aniket", age: 25 },
  { name: "Vaibhav", age: 21 },
  { name: "Sumit", age: 26 },
  { name: "Akshay", age: 26 },
];

function findUnique(users) {
  const ageObj = {};
  for (let user of users) {
    console.log("user name and Age", user.name, " " + user.age);
    ageObj[user.name] = (ageObj[user.age] || 0) + 1;
    ageObj[user.age] = (ageObj[user.age] || 0) + 1;
  }
  console.log(ageObj);
}
findUnique(users);
