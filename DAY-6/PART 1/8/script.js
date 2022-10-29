const prompt = require("prompt-sync")({ sigint: true });
let a = prompt("Enter a number?");
a = a <= 0;
//Don't modify any code below this
if (a) {
    console.log('OMG it works for any number inc 0');
}
else {
    console.log("Success");
}