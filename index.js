console.log("hello");
var myFunc = function (a, b) {
  return a > b ? a : b;
};
myFunc(1, 2);

var isLandscape = function (width, height) {
  return width > height;
};

var fizzBuzz = function (num) {
  return typeof num !== "number"
    ? NaN
    : num % 3 === 0 && num % 5 === 0
    ? "FizzBuzz"
    : num % 3 === 0
    ? "Fizz"
    : num % 5 === 0
    ? "Buzz"
    : num;
};

var checkSpeed = function (speed) {
  const speedLimit = 70;
  const speedPerPoint = 5;

  return speed < speedLimit + speedPerPoint
    ? "Ok"
    : Math.floor((speed - speedLimit) / speedPerPoint) < 12
    ? Math.floor((speed - speedLimit) / speedPerPoint) + " point(s)"
    : "suspended";
};

const showNumbers = function (limit) {
  for (let i = 0; i <= limit; i++) {
    i % 2 === 0 ? console.log(i, "EVEN") : console.log(i, "ODD");
  }
};

const countTruthy = function (arr) {
  return arr.filter((e) => e).length;
};

const scaryMovie = {
  title: "a",
  year: 1222,
  director: "e",
};

const showProperties = function (movie) {
  for (const item in movie) {
    typeof movie[item] === "string" ? console.log(item, movie[item]) : 0;
  }
};

const sum = function (limit) {
  let total = 0;

  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }
  console.log(total);
};

const calculateGrade = function (gradeArr) {
  calculateAverage(gradeArr) > 89
    ? console.log("A")
    : avg > 79
    ? console.log("B")
    : avg > 69
    ? console.log("C")
    : avg > 59
    ? console.log("D")
    : console.log("F");
};

const calculateAverage = function (numbers) {
  return (
    numbers.reduce((acc, curr) => {
      return acc + curr;
    }, 0) / numbers.length
  );
};

const showStars = function (rows) {
  for (let i = 1; i <= rows; i++) {
    let myAst = "";
    for (let j = 1; j <= i; j++) {
      myAst += "*";
    }
    console.log(myAst);
  }
};

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    isPrime(number) ? console.log(number) : 0;
  }
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) {
      return false;
    }
  }
  return true;
}

// factory rectangle
function createTriangle(side1, side2, side3) {
  return {
    side1,
    side2,
    side3,
    area() {
      console.log("Area!");
    },
  };
}

let triangle1 = createTriangle(1, 2, 3);

// constructor rectangle
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
  this.area = function () {
    console.log(this.length * this.width);
  };
}

let myRect = new Rectangle(1, 2);
myRect.area;

let address = {
  street: "Drive",
  city: "Urbana",
  zipcode: 98756,
};

function showAddress(address) {
  for (let key in address) {
    console.log(key, address[key]);
  }
}

function createAddress(street, city, zipcode) {
  return {
    street,
    city,
    zipcode,
  };
}
let myAdd = createAddress(1, 2, 3);

function Address(street, city, zipcode) {
  this.street = street;
  this.city = city;
  this.zipcode = zipcode;
}

let myAdd2 = new Address(1, 3, 5);

let address1 = new Address(1, 2, 3);
let address2 = new Address(1, 2, 3);

function areEqual(a, b) {
  let myBool = true;
  if (Object.keys(a).length !== Object.keys(b).length) {
    myBool = false;
  }
  Object.keys(a).forEach((key) => {
    console.log(a[key], b[key]);
    if (a[key] !== b[key]) {
      myBool = false;
    }
  });
  return myBool;
}
function areSame(a, b) {
  return a === b;
}

let blogPost = {
  title: "Boo",
  body: "words",
  author: "johnny fav",
  views: 2,
  comments: [
    {
      author: "Bubs",
      body: "words",
    },
    {
      author: "Dubs",
      body: "worbs",
    },
  ],
  isLive: false,
};

function BlogPost(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

let testObj = {
  one: 1,
  two: 2,
  three: 3,
};

let newObj = { eight: 8, ...testObj };

let newTestArr = [
  { one: 1, two: 2, three: "three" },
  { one: 10, two: 20, three: "eight" },
];

console.log(
  "Find 227",
  newTestArr.find((e) => e.one === 1)
);

const numbers = [0, 5, 2, 4, 3, 1];
console.log("sort 233", numbers.sort());
console.log(numbers.reverse());

console.log(
  newTestArr.sort((a, b) => {
    if (a.three.toUpperCase() > b.three.toUpperCase()) {
      return 1;
    }
    if (a.three.toUpperCase() < b.three.toUpperCase()) {
      return -1;
    }
    return 0;
  })
);

const allEven = numbers.every((num) => num % 2 === 0);
console.log("allEven 249", allEven);

// 'some' checks to see if at least one meets the criteria

const evenNumbers = numbers.filter((n) => n % 2 === 0);
console.log("evenNumbers", evenNumbers);

console.log("numbers", numbers);

console.log(numbers.map((n) => ({ value: n })));

console.log(numbers.reduce((prev, curr) => prev + curr, 0));

function arrayFromRange(min, max) {
  let myArr = [];
  for (let i = min; i <= max; i++) {
    myArr.push(i);
  }
  return myArr;
}

function includes(array, searchElement) {
  for (let e of array) {
    if (e === searchElement) {
      return true;
    }
  }
  return false;
}

function except(array, excluded) {
  let retArray = [];
  array.forEach((e) => {
    if (!excluded.includes(e)) {
      retArray.push(e);
    }
  });
  return retArray;
}

console.log(except(numbers, [1, 2]));
console.log(numbers, 290);

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    return console.error("Invalid Offset");
  }
  let newArray = [...array];
  let num = newArray.splice(index, 1)[0];
  newArray.splice(position, 0, num);
  return newArray;
}

const newNumbers = [6, 7, 3, 5, 1, 0, 2, 2, 2, 2, 7];

try {
  const countX = countOccurences(null, 1);
  console.log(countX);
} catch (e) {
  alert(e);
}

function countOccurences(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new Error("Not an array");
  }
  return array.reduce((prev, current) => {
    if (current === searchElement) {
      prev++;
    }
    return prev;
  }, 0);
}

function getMax(array) {
  return array.reduce((acc, curr) => (acc > curr ? acc : curr), undefined);
}

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3.5 },
  { title: "d", year: 2018, rating: 3 },
  { title: "e", year: 2017, rating: 4.5 },
];

let filteredMovies = movies
  .filter((movie) => movie.year === 2018 && movie.rating > 4)
  .sort((a, b) => {
    return a.rating > b.rating ? -1 : 1;
  })
  .map((e) => e.title)
  .join("\n");

console.log(filteredMovies);

const person1 = {
  firstName: "Jeff",
  lastName: "James",
  get fullName() {
    return `${person1.firstName} ${person1.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") {
      throw new Error("String, fool.");
    }
    let nameArr = value.split(" ");
    if (nameArr.length !== 2) {
      throw new Error("First and last name, please");
    }
    person1.firstName = nameArr[0];
    person1.lastName = nameArr[1];
  },
};

function sumX(...args) {
  if (args.length === 1 && Array.isArray(args[0])) {
    args = [...args[0]];
  }
  return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumX(1, 2, 3, 4));

let myCircle = {
  radius: 3,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};
