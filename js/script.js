person = { name: "anand", age: 30, height: 70 };

var cus2 = new Object();
cus2.name = "ajay";
cus2.age = 30;
cus2.prof = "IT";
console.log(cus2);

colors = ["red", "green", 23];
colors.forEach((e, w) => {
  console.log("e->" + e + w);
});
class Car {
  constructor(id) {
    this.id = id;
  }
  identify() {
    return `car id : ${this.id}`;
  }
}
let car = new Car();
