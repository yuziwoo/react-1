//한 줄 입력 try.txt 지우고 /dev/stdin
const s = require('fs').readFileSync('try.txt').toString().split(' ');
const s = require('fs').readFileSync('/dev/stdin').toString().split(' ');


//여러 줄 입력 : try.txt 지우고 /dev/stdin
const s = require('fs').readFileSync('try.txt').toString().split('\n');
const s = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// 이렇게 해도 됨
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

// readline
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = [];
rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {
  const [x, y] = input;
  })

/dev/stdin
