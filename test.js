let s = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(v => parseInt(v, 2));
let a = (s[0]+s[1]).toString(2);
let b = 0;
if (a[0] == 0) {
    b = a.split("");
    b.shift();
    b = b.join("");
}else {
    b = a;
}
console.log(b);