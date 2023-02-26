// swapping algorithm using additional variable

let a = 10;
let b = 20;
let t;

console.log("Before swapping a = " + a +" and b = " + b);

t = a;
a = b;
b = t;

console.log("After swapping a = " + a + " and b = " + b);

// swapping algorithm without using additonal variable

let z=20;
let y=40;

z = z+y;
y = z-y;
z = z-y;

console.log("After swapping z = " + z + " and y = " + y);