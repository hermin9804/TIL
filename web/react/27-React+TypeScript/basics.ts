let age: number = 25;
age = 12;

let userName: string;
userName = "min";

let isIstructor: boolean;
isIstructor = true;

let hobbies: string[];
hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let people: Person[];

// Type inference
let course: string | number = "React - the Complete Guide";

course = 123;

// Function & Type
function myAdd(a: number, b: number): number | string {
  return a + b;
}

function myPrint(vlaue: any) {
  console.log(vlaue);
}

// Generics
function insetAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insetAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insetAtBeginning(["a", "b", "c"], "d");

// error ubdatedArray[0].split('');
