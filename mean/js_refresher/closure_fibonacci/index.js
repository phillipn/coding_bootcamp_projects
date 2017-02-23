'use strict'

function fib() {
  var arr = [0, 1];

  function nacci() {
    var sum = 0;
    for (let i = arr.length - 1; i >= arr.length - 2; i--) {
      sum += arr[i];
    }
    arr.push(sum);
    console.log(sum);
  }
  return nacci
}

var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
