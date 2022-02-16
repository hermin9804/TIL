const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["hiking"];

console.log(...hobbies);

const person = {
  name: "mher",
  age: 25,
};

const copiedPerson = { ...person };
console.log(copiedPerson.name + copiedPerson.age);
