const people = [
  { name: "bob", age: "21" },
  { name: "mary", age: "17" },
  { name: "jill", age: "35" },
  { name: "jake", age: "52" },
];

// return: name of oldest person

const pickOldest = (arr) => {
  const res = {
    name: "",
    age: -100,
  };
  arr.forEach((el) => {
    const { name, age } = el;
    if (age > res.age) {
      res.name = name;
      res.age = age;
    }
  });
  return res;
};
console.log(pickOldest(people));

const getOldest = (people) => {

  // your code here
  //turn age into array and find average
  const average = (array) => array.reduce((a, b) => a + b) / array.length;
  console.log(average([17, 21, 35, 52]));
};

getOldest(people);

// return: average age

const getAvgAge = (people) => {
  // your code here
};

getAvgAge(people);

// return: most frequent character

function getMostFreqChar(str) {
  // your code here
  const arr = ["bob", "mary", "jill", "jake"];
  let mf = 5;
  let m = 0;
  let item;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] == arr[j]) m++;
      if (mf < m) {
        mf = m;
        item = arr[i];
      }
    }
    m = 0;
  }
  console.log(`${item} ( ${mf} times ) `);
}

getMostFreqChar("acccccccbbbbbbbbb");
