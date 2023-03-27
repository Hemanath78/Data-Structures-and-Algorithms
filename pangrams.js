let test = "abcdefghijklmnopqrstuvwxyz";

let s = "We promptly judged antique ivory buckles for the next prize";

let alpha = 26;

let str = s.toLowerCase();

console.log(str);

let alpha_check = 0;

let go = [];

for (let i = 0; i < str.length; i++) {

    if (str[i] != " ") {

        for (let j = 0; j < test.length; j++) {

            if (str[i] != go[j]) {

                if (str[i] === test[j]) {

                    alpha_check++;

                    go.push(test[j]);
                }

            }

            else {

                break;

            }

        }
    }

}

if (alpha == alpha_check) {

    console.log("pangram");
}

else {
    console.log("not pangram");
}

console.log(alpha_check);

console.log(go);




// We promptly judged antique ivory buckles for the next prize

// We promptly judged antique ivory buckles for the prize