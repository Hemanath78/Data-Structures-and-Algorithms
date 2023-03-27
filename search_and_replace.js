// // give input regarding your requirement

// let input = "velia poda. velia poveliada. velia poda. velia poda. velia poda.";

// // give the word that you to find and replace

// let find = "velia";

// // give the replace word

// let replace = "ulla";

// let input_arr = input.split(" ");


// for(let i=0; i<input_arr.length; i++){
    
//     if(find == input_arr[i]){

//         input_arr[i] = replace;
//     }
// }

// let input_join = input_arr.join(" ");

// console.log(input_join);


let input = "He a is superstar";

let test_arr = [];

let find_arr = [];

let replace_arr = [];

let find = "is";

let replace = "was";


for(let i = 0; i < input.length; i++){

    if(input[i] != " "){

        test_arr.push(input[i]);
    }
}

for(let i=0; i < find.length; i++){
    
    if(find[i] != " "){

        find_arr.push(find[i]);
    }
}


for(let i=0; i < replace.length; i++){
    
    if(replace[i] != " "){

        replace_arr.push(replace[i]);
    }
}

for(let i=0; i <test_arr.length; i++){

    if(find_arr[0] == test_arr[i]){

        if(find_arr[1] == test_arr[i+1]){

            test_arr[i] = replace_arr[0];

            test_arr[i+1] = replace_arr[1];

            test_arr[i+2] = replace_arr[2];
        }
    }
}


console.log(test_arr);
// console.log(find_arr);
// console.log(replace_arr);




