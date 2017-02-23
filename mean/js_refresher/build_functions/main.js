'use strict';

function runningLogger(){
  console.log('I am running!');
}

function multiplyByTen(num){
  return num * 10;
}

console.log(multiplyByTen(5));

function stringReturnOne(){
  return 'string1';
}

function stringReturnTwo(){
  return 'string2';
}

function funcExecutor(parameter){
  if(typeof(parameter) == 'function'){
    return parameter();
  }
}

funcExecutor(function(){
  console.log('run func run');
});

function myDoubleConsoleLog(a, b){
  if(typeof(a) == 'function' && typeof(b) == 'function'){
    console.log(a(), b());
  }
}

myDoubleConsoleLog(function(){
  return '1';
}, function(){
  return '2';
});

function caller2(param){
  console.log('starting');
  setTimeout(() => {
    if(typeof(param) == 'function'){
      console.log(param());
    }
  });
  console.log('ending?');
  console.log('interesting');
}

caller2(() => {
  return 'call';
});

// SAME AS

caller2(() => 'call');
