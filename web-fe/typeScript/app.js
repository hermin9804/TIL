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
    firstName: "mher",
    age: 25
};
var copiedPerson = __assign({}, person);
console.log(copiedPerson.firstName + copiedPerson.age);
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curRsult, curValue) {
        return curRsult + curValue;
    }, 0);
};
var addedNumbers = add(1, 2, 3, 4, 5);
console.log(addedNumbers);
var hobby1 = hobbies[0], hobby2 = hobbies[1], remainingHobbies = hobbies.slice(2);
console.log(hobbies, hobby1, hobby2);
var userName = person.firstName, age = person.age;
console.log(userName, age, person);
