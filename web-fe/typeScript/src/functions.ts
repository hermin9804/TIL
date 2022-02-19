function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 10));

let combineValues: (a: number, b: number) => number;

combineValues = add;
//combineValues = printResult;
//combineValues = 5;

console.log(combineValues(8, 8));

function addAndHanled(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHanled(10, 20, (result) => {
  console.log(result);
  return result;
});
