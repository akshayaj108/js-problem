let log = console.log;
function makeFibonacci(number) {
  let n1 = 0,
    n2 = 1,
    total;
  const result = [];
  for (let i = 0; i <= number; i++) {
    total = n1 + n2;
    n1 = n2;
    n2 = total;
    result.push(total);
  }
  log(result);
}
makeFibonacci(6);
