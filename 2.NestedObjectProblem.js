const nested = {
  name: "akshay",
  child: {
    name: "Amit",
    child: {
      name: "Aman",
      child: {
        name: "Aniket",
        child: {
          name: "Manish",
          child: {
            name: "Akshay",
          },
        },
      },
    },
  },
};
let log = console.log;
const iterateObject = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      iterateObject(obj[key]);
    } else {
      log(obj[key]);
    }
  }
};
iterateObject(nested);
