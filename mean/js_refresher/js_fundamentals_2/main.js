'use strict';

//function summer(num1, num2){
//  let sum = 0;
//  let diff = Math.abs(num1 - num2);
//  console.log(diff);
//  for (let i = num1 + 1; i < num1 + diff; i++) {
//    sum += i;
//  }
//  console.log(sum);
//}

var summer = (num1, num2) => {
  let sum = 0;
  let diff = Math.abs(num1 - num2);
  for (let i = num1 + 1; i < num1 + diff; i++) {
    sum += i;
  }
  console.log(sum);
};
summer(2,4);

//function findMin(arr){
//  let min = arr[0];
//  for (let i = 1; i < arr.length; i++) {
//    if (min > arr[i]){
//      min = arr[i];
//    }
//  }
//  console.log(min);
//}

var findMin = (arr) => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]){
      min = arr[i];
    }
  }
  console.log(min);
};

// function findAvg(array){
//   let sum = 0;
//   for (var i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum / array.length;
// }

var findAvg = (array) => {
  let sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
};

function me(){
  this.name = 'Nick';
  this.distance_traveled = 0;
  this.sayName = () => console.log(this.name);
  this.saySomething = (saying) => console.log(saying);
  this.walk = () => {
    console.log('Walking...');
    this.distance_traveled += 3;
  };
  this.run = () => {
    console.log('Running...');
    this.distance_traveled += 10;
  };
  this.crawl = () => {
    console.log('Crawling...');
    this.distance_traveled += 1;
  };
}

var newme = new me();
newme.sayName();
newme.saySomething('me');
newme.walk();
console.log(newme.distance_traveled);
