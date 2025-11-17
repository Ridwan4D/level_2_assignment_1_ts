# Blog 1: Union and intersection types in TypeScript.

As a javascript developer we all know conditional operator. There are many kinds of operator but we will talk about two operator and this are: 1. `or (||)` operator, 2. `and (&&)` operator. `Union` and `intersection` of typescript are contain the same concept.
**let's see with example:**

``` javascript
//--------------- concept of or and operator -------------
// or operator
let input = "5";
if (typeof input == "string" || typeof input == "number") {
  // here we are using or "||" operator that means if any of condition is become true
  console.log("The input is a string or number type element"); // then print this
} else {
  console.log("The input is not a string or number"); // if no one match with condition then print this
}

// and operator
let age = 20;
let income = 10000;

// scenario: if a boy earn more then 8000tk and his age is more than 18, then he can marry.....So check this out using and operator
if (age > 18 && income > 8000) {
  // here we are using and "&&" operator, means if both condition become true...
  console.log("The boy is eligible to marry"); // then this will print
} else {
  console.log("No. The boy is not enough to marry");
}

//---------- now the concept of union and intersection -------------
// union

type UserRole = "admin" | "manager";

const makePost = (user: UserRole) => {
  // in union, user can be either "admin" or "manager"
  // so any of these two values is acceptable
  if (user === "admin" || user === "manager") {
    console.log(`${user} can make a post`);
  } else {
    console.log("User is not allowed to make a post");
  }
};

// intersection

type Person = {
  name: string;
};

type Employee = {
  company: string;
};

type Staff = Person & Employee; // this means Staff must have both "name" and "company"

const staffInfo: Staff = {
  name: "Ridwanul",
  company: "Tech Corp",
};

console.log(
  `${staffInfo.name} works at ${staffInfo.company} as a staff member.`
);
// here intersection means it should satisfy both type requirements
// if one of the required properties is missing, it will throw an error

```
The difference between `js` concept and `ts` concept is **syntax and implementation**



# Blog 2: Difference between Interface and types in typescript.
To dive in the concept of `interface` and `type alias`, we need to understand why we need them.
### Both are used to define the shape or structure of and object, but they have some difference.

```javascript
//---------- Type Alias ----------

// Type is like giving a nickname to a type.
// You can use it for primitives, unions, intersections, and even objects.
type User = {
  name: string;
  age: number;
};

const user1: User = {
  name: "Ridwan",
  age: 21,
};

// You can also use union or intersection with types
type Status = "active" | "inactive"; // union type
type Employee = User & { job: string }; // intersection with type

const employee1: Employee = {
  name: "Salman",
  age: 30,
  job: "Developer",
};

//---------- Interface ----------

// Interface is used to define the structure of an object as well, mostly for objects
// It’s very useful to define contracts in the code, especially for OOP (classes)
interface Person {
  name: string;
  age: number;
}

const person1: Person = {
  name: "Imran",
  age: 25,
};

// Interfaces can be extended
interface Developer extends Person {
  skills: string[];
}

const dev1: Developer = {
  name: "Sadia",
  age: 23,
  skills: ["React", "TypeScript"],
};
```

---------- **Key Differences** ----------

1. Type is more flexible → it can define primitives, unions, tuples, etc.
2. Interface is mostly for defining objects.
3. Interface supports declaration merging (can be expanded later), type doesn’t.

Example of merging in interface:
```javascript
interface Car {
  model: string;
}

interface Car {
  brand: string;
}

const myCar: Car = {
  model: "2024",
  brand: "Toyota",
};
```







