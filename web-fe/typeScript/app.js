var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var hobbies = ["Sports", "Cooking"];
var activeHobbies = ["hiking"];
console.log.apply(console, hobbies);
var person = {
    name: "mher",
    age: 25
};
var copiedPerson = __assign({}, person);
console.log(copiedPerson.name + copiedPerson.age);
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curRsult, curValue) {
        return curRsult + curValue;
    }, 10);
};
var addedNumbers = add(1, 2, 3, 4, 5);
console.log(addedNumbers);
