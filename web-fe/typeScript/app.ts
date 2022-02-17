const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["hiking"];

console.log(...hobbies);

const person = {
  name: "mher",
  age: 25,
};

const copiedPerson = { ...person };
console.log(copiedPerson.name + copiedPerson.age);

const add = (...numbers: number[]) => {
  return numbers.reduce((curRsult, curValue) => {
    return curRsult + curValue;
  }, 0);
};

const addedNumbers = add(1, 2, 3, 4, 5);
console.log(addedNumbers);
