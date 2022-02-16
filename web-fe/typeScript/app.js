function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(5, 10));
var combineValues;
combineValues = add;
//combineValues = printResult;
//combineValues = 5;
console.log(combineValues(8, 8));
function addAndHanled(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHanled(10, 20, function (result) {
    console.log(result);
});
