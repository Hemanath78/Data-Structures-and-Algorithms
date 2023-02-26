// For n = 4

// 1           1
// 1 2       2 1
// 1 2 3   3 2 1
// 1 2 3 4 3 2 1

function pyramid(n){

    for (let i = 1; i <= n; i++) {
    
        let number = "";
    
        let space = "";
        
        let number_two = "";
    
        let space_two = "";
    
        for (let j = 1; j <= i; j++) {
    
            number = number + j + " ";
        }
        
        for(let k = n-1; k >=i; k--){
    
            space = space + "- ";
        }
    
        for(let k = n-1; k > i; k--){
    
            space_two = space_two + "- ";
        }
    
        for(let j = 1; j <= i; j++){
    
            if(j==n){
    
                let number_four = " ";
    
                for(let m = 1; m<=n-1; m++){
    
                    number_four = m;
    
                }
    
            }
    
            else {
    
                number_two = j + " " + number_two;
            }
        }
    
        console.log(number + space + space_two + number_two);
    }
    
    }
    
    // you can give her the number of times the loops wants to run
    pyramid(6);
    