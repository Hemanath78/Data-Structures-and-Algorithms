// printing "rajni" and "superstar" in two methods

//  first method by checking the number is odd or even. 
// if the number is odd "rajni" print otherwise "superstar" print



for(let a = 1; a <= 100; a++){

    if(a % 2 == 1) {
       console.log(a + " Rajni");
    }
 
    else{
       console.log(a + " Superstar");
    }
 
 
    console.log(a++ + " Rajni");
    console.log(a + " Superstar");
 }
 


 
 // second method "rajni" will print with the value of increment of a++
 // "superstar" will print with incremented value of a

 
 
 for(let k = 1; k <= 100; k++){ 
  
     console.log(k++ + " Rajni");
     console.log(k + " Superstar");
 
  }


 
 // ! If you want run two methods separate comment the any one of the above
  
 
 