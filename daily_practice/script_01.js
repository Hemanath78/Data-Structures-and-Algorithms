// printing superstar and rajni in vertical way

// S R
// U A
// P J
// E N
// R I
// S
// T
// A
// R

const star = ["S", "U", "P", "E", "R", "S", "T", "A", "R"];

const rajni = ["R", "A", "J", "N", "I"];


for (let k = 0; k <= 1; k++) {

    for (let i = 0; i <= 8; i++) {

        let string = "";



        if (i <= 4) {

                string = string + star[i] + " " + rajni[i];

            console.log(string);
        }

        else {
        
                string = string + star[i] + " "; 

            console.log(string);



        }
    }


}
