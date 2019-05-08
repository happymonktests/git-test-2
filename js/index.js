var i = 0;
console.log("hello tesxt");
a = [2, 24, 45, 6, 3];
a.unshift(2);
console.log(a);
a.unshift(2, 1);
console.log(a);
a.push(12, 13, 4);
console.log(a);
b = a.pop();
console.log(a);
console.log(b);
console.log(a.shift());
console.log("applied shift " + a);
console.log(a.splice(2, 3));
console.log(a);
console.log();
var n1 = [1, 1];
var n2 = [2, 2];
var n3 = [3, 3];
var num12 = n1.concat(n2, n3);

console.log(num12.concat([4, 4]));
console.log(num12);
function sortNumber(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}

var numArray = [140000, 22, 44, 104, 99];
numArray.sort(sortNumber);
var v = ["A1", "a1", "b1", "B1"];
console.log(
  v.sort((a, b) => {
    x = a.toUpperCase();
    y = b.toUpperCase();
    x > y ? 1 : x < y ? -1 : 0;
  })
);
let movie = "hello global var";
function theNotebook() {
  let movie = "The Notebook";
  return movie;
}
console.log(movie);
console.log(theNotebook());
