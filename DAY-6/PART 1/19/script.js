// Whats the msg printed and why?
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
    msg += "hi";
}
if (lemeout) {
    msg += 'hello';
}
console.log(msg);
console.log(`The message printed is "HI". Because the assigned value to the lemein is a string. But lemeout is of  0 which represents no value.` ); 