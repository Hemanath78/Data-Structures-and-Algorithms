let str = "cotton";

let strnew = str.split("");

let temp = "";

for(let i=0; i < (str.length/2); i++){

    temp = strnew[i];

    strnew[i] = strnew[strnew.length - (i+1)];

    strnew[strnew.length - (i+1)] = temp;

}

let strarr = strnew.join("");


if(str == strarr){
     
    console.log(str + " is palindrome");
}

else {

    console.log(str + " is not palindrome");

}