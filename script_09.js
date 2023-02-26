// right side staircase pattern using numbers solved using two methods.

// Number staircase

// if n = 5;

// . . . . .  1  
//  . . . . 2 1  
//  . . . 3 2 1
//  . . 4 3 2 1
//  . 5 4 3 2 1


const n=5;

for(let i=1; i<=n; i++){

    let row = " ";
 
    let num = " ";
    
    let output;

    for(let j=i; j<=n; j++){

        row = row + ". " ;
    }

    for(j=1; j<=i; j++){

        num = j + " " + num;

        output = row + num ;

    }

    console.log(output);

}