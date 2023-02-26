// from the given array find the sum of even and odd numbers

const a = [1,3,6,8,9,11];

let even=0;

let odd=0;

for(let i=0; i < a.length; i++){

    if(a[i] % 2 == 0){
        even = a[i]+even;
    }

    else{
        odd = a[i] + odd;
    }

}

console.log("Sum of the even numbers from the given array " + even);
console.log("Sum of the odd numbers from the given array " + odd);