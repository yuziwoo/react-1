let [d,w,h] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v);
let a = (x) => Math.floor(x*d/(h**2 + w**2)**0.5);
console.log(a(h),a(w));