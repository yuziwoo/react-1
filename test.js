let arr = [8, 7, 5, 6, 13, 75, 1, 2];
let arr2 = arr.filter((num) => {
  return num > 3;
})
console.log(arr2);

let arr3 = ["apple", "banana", "cherry", "durian"];
let arr5 = arr3.filter((value) => {
  return value.length > 5;
})
console.log(arr5);


let arr6 = [1, 2, 3];
let arr7 = arr6.filter((value, index, target) => {
  console.log(value, index, target);
  return value > 1;
});
console.log(arr7);