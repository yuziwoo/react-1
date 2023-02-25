const s = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(s[0]);

for (let i = 1; i <= n; i++) {
  const [a, b] = s[i].trim().split(' ').map(v => Number(v));
  console.log(a + b);
}