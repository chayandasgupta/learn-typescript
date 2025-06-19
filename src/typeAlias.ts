import { UserData } from "./userData";
type ID = string | number;

type User = {
  id: ID;
  firstName: string;
  lastName: string;
  age: number;
  score: number;
  skills: {
    id: ID;
    name: string;
  }[];
  certificates: {
    id: ID;
    name: string;
    issuedBy: string;
  }[];
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    position: {
      latitude: number;
      longitude: number;
    };
  };
};

type Address = User["address"];
type Position = User["address"]["position"]; // Or Address["position"];

function printAddress(addr: Address) {}
function printPosition(pos: Position) {}

/**
  * (JSON.parse(UserData) as User)  gives:

  Benefit	Explanation
  ✅ IntelliSense	You can now use user.skills, user.address.city, etc. with suggestions in your editor.
  ✅ Type Safety	You can catch mistakes like user.agge (wrong key) at compile time.
  ✅ Clean Code	Reusable, predictable structure with User type.
  ✅ Better Refactoring	If you rename or change the User type, TypeScript will highlight affected code.
*/
const user2 = JSON.parse(UserData) as User;
function printSkills(skills: User["skills"]) {
  skills.forEach((skill) => console.log(skill.name));
}
printSkills(user2.skills);

function printSkill(skill: User["skills"][number]) {
  console.log(skill.name);
}
printSkill(user2.skills[1]);

// Function signature

// Ex:1
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;

// Ex:2
type CB = () => void; // CB = Callback;
function testCB(cb: CB) {
  cb();
}

// Ex:3 - with argument
type CB2 = (arg1: string, arg2: string) => string;
function testCB2(cb: CB2) {
  cb("arg1", "arg2");
}
testCB2((arg1, arg2) => arg1 + arg2);

function print() {
  return {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 25,
    score: 90,
  } as User;
}
function print2(): User {
  return {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 25,
    score: 90,
    skills: [],
    certificates: [],
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
      position: {
        latitude: 37.7749,
        longitude: -122.4194,
      },
    },
  };
}
