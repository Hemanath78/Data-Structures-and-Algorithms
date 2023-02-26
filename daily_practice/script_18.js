// Hollow patter

// if n = 5

// eg:

// 1 2 3 4 5
// 2       4
// 3       3
// 4       2
// 5 4 3 2 1

const n =5;

let res="";


for(let i = 1; i <= n; i++){

    for(let j = 1; j <= n; j++){

        if(i==1||j==1||i==n||j==n){

           res=res + j +" "
        }

        else {
            res=res + "  "
        }

    }
   res = res + "\n";
    
}

console.log(res);