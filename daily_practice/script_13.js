// diamond pattern 

// if n = 5

// ........1
// .......1 2
// ......1 2 3
// .....1 2 3 4
// ....1 2 3 4 5
// .....4 3 2 1
// ......3 2 1
// .......2 1
// ........1


const n=5;

let number = ""; // to store numbers empty string

for(let i = 1; i <=n; i++){
 
    let space = ""; // to store spaces empty string

    number = number + i + " ";

    for(let j = n; j > i ; j--){

        space = space + ".";
    }

    console.log(space + number);
}


let space = "";  // to store spaces empty string

for(let k =1; k<n; k++){

    space = space + ".";

    let number = ""; // to store numbers empty string

    let p = 1;

    for(let s=k; s<n; s++){

        number = p + " " + number;

        p++;
    }

    console.log(space + number);
}
