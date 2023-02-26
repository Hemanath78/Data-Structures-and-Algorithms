// Pyramid pattern

// if n = 3

// ........ 1
// .......2 3 4
// .....5 6 7 8 9

const n = 3; //number of rows want you to print

let num = 1;

for(let i = 1; i <= n; i++){

     let number = "";
     let space = ""

     for(let j=1; j <= 2*n-1; j++){

          if((j >= n-(i-1)) && (j <= n+(i-1))){

               number = number + num + " ";
               num++;
          }
          else{

               space = space + " ";

          }

     }
     console.log(space+number);
    
}
