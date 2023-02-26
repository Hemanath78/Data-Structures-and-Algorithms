// square pattern using numbers solved using two methods.

// 1 1 1 1 1
// 2 2 2 2 2
// 3 3 3 3 3
// 4 4 4 4 4
// 5 5 5 5 5 


// method one

const n = 5;

for(let a = 1; a <= n; a++){

    
    let row = "";

    for(let b = 1; b <= n; b++){

      
        row = row + a + " ";

    }
    console.log(row);
}

// method two

let string='';

let columns = 7;

let rows = 6;

for (let i = 1; i <= rows; i++) {

 for (let j = 1; j <= columns; j++) {

   string =string + i + ' ';
   
 }

 string += '\n';
}
console.log(string);
