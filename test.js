s = require('fs').readFileSync('/dev/stdin').toString().split('\n');
t = s.shift();
x = s.shift();
b = 0;
for (let i = 0; i< +x; i++) {
  [y, z] = s[i].split(" ").map(v => +v);
  b += y * z;
}
console.log(b == t ? "Yes" : "No");