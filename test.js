let s = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let res = [];
let count = s.shift();

for(let i=0; i<count; i++) {
  let [x1, y1, r1, x2, y2, r2] = s[i].split(" ").map(Number);
  let dis = 0;

  if (x1 == x2 || y1 == y2) {
    dis = Math.abs(x2 - x1) + Math.abs(y2 - y1);
  } else {
    dis = Math.sqrt(((x2 - x1) ** 2) + (y2 - y1) ** 2);
  }

  if (dis > r1 + r2) {
    res.push(0);
  } else if (dis == 0) {
    if (r1 == r2) {
      res.push(-1);
    }else {
      res.push(0);
    }
  } else if (dis < Math.abs(r2 - r1)) {
    res.push(0);
  }else if (dis == r1 + r2 || dis == Math.abs(r2 - r1)) {
    res.push(1);
  } else {
    res.push(2);
  }
}

console.log(res.join("\n"));