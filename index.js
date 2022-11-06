"use strict";

// 1
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
  };
console.log(user.studentstatus);  

// 2
const cars = ["BMW", "MAZDA", "TOYOTA", "VOLVO"];
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
};

let x = 0;
while (x < cars.length) {
    console.log(cars[x]);
    x++;
};

// 3
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > 5) {
        console.log (numbers[i])
    }
}

// 4

// თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:hello;
// თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
// თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;

let user1 = {
    name: 'giorgi',
    age: 20,
    studentstatus: 'active'
};
if (user1.name < 18 && user1.studentstatus === "active") {
    console.log("hello");
} else if (user1.name === "levan") {
    console.log("hello levan");
} else if (user1.studentstatus === "active" ||user1.age < 25) {
    console.log( "hello world");
} else if {
    console.log("error");
}

    
// 5

let array3 = [[2, -3, 5, 10], [25, -24, -11, 100], [-6, -7, 10]]
for (let i = 0; i < cars.length; i++) {
    for (let x = 0; x < array[i].length, x++) {
        if (array[i][x] < 0) {
            console.log(array[i][x]);
        }
    }
}
  
// 6
// ლუწი

let array4 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10]
for (let i = 0; i < array4.length; i++) {
    if (array4[i] % 2 === 0) {
      console.log(array4[i]);
    }
  }

//   კენტი

let array4 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10]
for (let i = 0; i < array4.length; i++) {
    if (array4[i] % 2 !== 0) {
      console.log(array4[i]);
    }
}
  
// 7
