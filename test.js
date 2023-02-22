const s = 1*require('fs').readFileSync('/dev/stdin').toString().trim();
if (s % 4) {
  console.log(0);
} else if (s % 100 == 0 && s % 400 != 0) {
  console.log(0);
} else {
  console.log(1);
}