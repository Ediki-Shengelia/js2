"use strict";

//1.
for (let index = 5; index < 100; index++) {
  console.log(index);
}

//2.

let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let index of array1) {
  if (index > 0 && index < 10) {
    console.log(index);
  }
}

//3.

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let index of array2) {
  if (index == 5) {
    console.log("არის");
    {
      break;
    }
  }
}

//4.

let array3 = [1, 2, 3, 4, 5];

let sum = 0;
for (let item of array3) {
  sum += item;
}
console.log(sum);

//5.

let array4 = [1, 2, 3, 4, 5];

let sum1 = 0;
for (let index of array4) {
  sum1 += index;
}
let result = sum1 / array4.length;
console.log(result);

//6.

let array5 = [1, 2, 3, 7, 6, 9];

for (let index1 of array5) {
  if (index1 == 7) {
    continue;
  }
  console.log(index1);
}

//7.

let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,
  studentstatus: "active",
};

console.log(user.studentstatus);

//8.
let user2 = {
  name: "anna",
  age: 20,
  studentstatus: "active",
};

if (user2.age < 18 && user2.studentstatus == "active") {
  console.log("hello user");
} else if (user2.name == "levan") {
  console.log("hello levani");
} else if (user2.studentstatus == "active" || user2.age < 25) {
  console.log("hello anna");
} else {
  console.log("error");
}

let result2 =
  user2.age < 18 && user2.studentstatus == "active"
    ? "hello user"
    : user2.name == "levan"
    ? "hello levani"
    : user2.studentstatus == "active" || user2.age < 25
    ? "hello anna"
    : "error";
console.log(result2);


// 9.
let array6 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]

for(let item1 of array6){
    if(item1 % 2==0 ){
        console.log(item1);
    }
}

//10.
let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
];

for(item3 of users){
    if(item3.status==true){
        console.log(item3);
    }
};

//11.
let array7 = [32, 14, null, '40', 50];

for(let index3 of array7){
    if (index3 % 5 == 0 && typeof index3 == 'number' ) {
        console.log(index3 );
    }
};

//12.

let array8 = [ [2, -3, 5, 11], [1, -35,-11], [12, -36, -24] ];

for(let itemArray of array8){
   for(let itemArray2 of itemArray){
    if (itemArray2>0) {
        console.log(itemArray2);
        }
   }
}