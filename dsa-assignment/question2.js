const fs = require("fs");

let input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

let a = parseInt(input[0]);

if(a%2==0){
    console.log("EVEN number");
}
else{
    console.log("Odd number")
}