// triangle patter 

// if n = 5

// ........1
// .......1 2
// ......1 2 3
// .....1 2 3 4
// ....1 2 3 4 5

const n = 3;

let number = ""; // to store numbers empty string

for(let i = 1; i <=n; i++){
 
    let space = ""; // to store spaces empty string

    number = number + i + " ";

    for(let j = n; j > i ; j--){

        space = space + "-";
    }

    console.log(space + number);
}
