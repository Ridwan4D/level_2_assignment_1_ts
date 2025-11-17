function formatValue(
  input: string | number | boolean
): string | number | boolean | undefined {
  if (typeof input === "string") {
    return `${input.toUpperCase()}`;
  }
  if (typeof input === "number") {
    return (input *= 10);
  }
  if (typeof input === "boolean") {
    return !input;
  }
}

function getLength(value: string | number[]): string | number | undefined {
  if (typeof value === "string") {
    const strLength = value.split("");
    return strLength.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }
}

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

type ArrObj = {
  title: string;
  rating: number;
};
function filterByRating(arr: ArrObj[]): ArrObj[] {
  let filteredArr = [];
  return (filteredArr = arr.filter(
    (item) => item.rating >= 4 && item.rating <= 5
  ));
}


type UserInfo = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
function filterActiveUsers(users: UserInfo[]): UserInfo[] {
  let activeUser = users.filter((user: UserInfo) => user.isActive === true);
  return activeUser;
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable === true ? "Yes" : "No"}`
  );
};

function getUniqueValues(arr1: number[], arr2: number[]): number[] {
  const uniqueArr: number[] = [];

  for (const number of arr1) {
    if (!duplicateValue(uniqueArr, number)) {
      uniqueArr[uniqueArr.length] = number;
    }
  }

  for (const number of arr2) {
    if (!duplicateValue(uniqueArr, number)) {
      uniqueArr[uniqueArr.length] = number;
    }
  }

  function duplicateValue(arr: number[], value: number): boolean {
    for (const number of arr) {
      if (number === value) {
        return true;
      }
    }
    return false;
  }
  return uniqueArr;
}

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: Product[]): number => {
  const totalOfEachProduct = products.map((product) => {
    const totalPrice = product.price * product.quantity;
    const discount = product.discount ? product.discount / 100 : 0;
    const discountedTotal = totalPrice - totalPrice * discount;
    return discountedTotal;
  });

  const totalPriceAllProduct = totalOfEachProduct.reduce(
    (sum, productTotal) => sum + productTotal,
    0
  );
  return totalPriceAllProduct;
};

