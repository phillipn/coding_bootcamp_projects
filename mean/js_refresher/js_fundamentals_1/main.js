'use strict';

let x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
// 1
for(let i=0;i<x.length; i++){
  console.log(x[i]);
}
// 2
x.push(100);
// 3
x += ["hello", "world", "JavaScript is Fun"];
console.log(x);
// 4
let sum = 0;
for (var i = 0; i <= 500; i++) {
  sum += i;
}
console.log(sum);
// 5
let arr = [1, 5, 90, 25, -3, 0];
let min;
for (var j = 0; j < arr.length; j++) {
  if(!min || arr[j] < min){
    min = arr[j];
    sum += arr[j];
  }
}
console.log(min);
//  6
console.log(sum/arr.length);
