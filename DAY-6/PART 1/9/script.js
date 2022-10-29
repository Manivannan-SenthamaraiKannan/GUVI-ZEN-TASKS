const prompt = require("prompt-sync")({ sigint: true });
let value = prompt('How many runs you scored in this ball');
if (value === 4) {
    console.log("You hit a Four");
} else if (value === 6) {
    console.log("You hit a Six");
} else {
    console.log(value);
}