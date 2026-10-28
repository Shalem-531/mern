
const fs = require("fs");

let input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);

if (a >= b && a >= c) {
    console.log(a);
} else if (b >= a && b >= c) {
    console.log(b);
} else {
    console.log(c);
}
