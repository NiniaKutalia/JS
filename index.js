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
let user = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}
