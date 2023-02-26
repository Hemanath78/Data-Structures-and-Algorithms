/**
*
Try this if you are comfortable with linear search.

int a[] = [13, 11, 13,4, 10, 9, 1];
int x[] = [11, 13, 4, 17];
// Your program should print
// 11 is found 1 time
// 13 is found 2 times
// 4 is found 1 time
// 17 is NOT found
*/


let a = [13,11,13,4,10,9,1];
let x = [13,11,4,17];

let s =0, d=0, f=0, g=0;

for(let i=0; i <= a.length; i++){
   
   if(a[i] == x[0]){
    s++;
   }
   
   else if(a[i] == x[1]){
     d++;
   } 
   
   else if(a[i] == x[2]){
     f++;
   }
   
   else if(a[i] == x[3]){
     g++;
   }
}

if(s !=0){
  console.log(x[0] + " is found " + s + " times")
}
else{
  console.log(x[0] + " is not found");
}

if(d !=0){
  console.log(x[1] + " is found " + d + " times")
}
else{
  console.log(x[1] + " is not found");
}

if(f !=0){
  console.log(x[2] + " is found " + f + " times")
}
else{
  console.log(x[2] + " is not found");
}

if(g !=0){
  console.log(x[3] + " is found " + g + " times")
}
else{
  console.log(x[3] + " is not found");
}


// line search using single array

let z=[11,4,1,5,8];

let i, max = 0;

for(i=0; i<z.length; i++){

   if(max <= z[i]){

      max=z[i];
   }

   else{

      max = max;
   }
}

console.log(max);

