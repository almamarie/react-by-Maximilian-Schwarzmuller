let age: number;
let userName: string;

userName = "12";

type Person = {
  name: string;
  age: number;
};

let hobbies: string[];

hobbies = ["lous", "wr"];

let person: Person;

person = {
  name: "max",
  age: 12,
};

let course: string | number = "this is a react course";
course = 12;

let people: Person;

function addN(a: number, b: number) {
  return a + b;
}

function printOut(value: any) {
  console.log(value);
}

function insertAtBeginning<T>(array: T[], value: T) {
  return [value, ...array];
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
