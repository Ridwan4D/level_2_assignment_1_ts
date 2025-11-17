# Blog about union and intersection types in TypeScript.

As a javascript developer we all know conditional operator. There are many kinds of operator but we will talk about two operator and this are: 1. `or (||)` operator, 2. `and (&&)` operator. Union and intersection of typescript are contain the same concept.
let's see with example:

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
