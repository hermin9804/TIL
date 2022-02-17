const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["hiking"];

console.log(...hobbies);

const person = {
  firstName: "mher",
  age: 25,
};

const copiedPerson = { ...person };
console.log(copiedPerson.firstName + copiedPerson.age);

const add = (...numbers: number[]) => {
  return numbers.reduce((curRsult, curValue) => {
    return curRsult + curValue;
  }, 0);
};

const addedNumbers = add(1, 2, 3, 4, 5);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;

console.log(userName, age, person);
