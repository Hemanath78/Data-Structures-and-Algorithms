// Forward number pattern
// 1 2 3 4 5

// you can give any number here
const n = 9;


let forward = " ";

for( let i = 1; i <= n; i++){

    forward = forward + i + " ";
}
console.log("Forward number pattern");
console.log(forward);

// backward number pattern
// 5 4 3 2 1

let backward = " ";

for( let j = 1; j <= n; j++){

    backward = " " + j + backward;

}
console.log("Backward number pattern");
console.log(backward);

// odd number pattern
// 1 3 5 7 9


let odd_num = " "

for( let k = 1; k <= n; k+=2){

    odd_num = odd_num + k + " ";
}
console.log("Odd number pattern");
console.log(odd_num);





















