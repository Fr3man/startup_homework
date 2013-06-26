#!/usr/bin/env node

// Check if the number is prime
var isPrime = function(n) {
   for (i = 2; i <= Math.sqrt(n); i++) {
	if (n % i == 0) { return false;}
   }
   return true;
}

// Return firs k primes
var firstkprime = function(k) {
   var counter = 0;
   var number = 2;
   var arr = [];
   while (counter < k) {
      if (isPrime(number)) {
         arr.push(number);
         counter++;
      }
      number++;
   }
   return arr;
}

// Print to console
var fmt = function(arr) {
    return arr.join(",");
};

var k=100;
console.log("firstkprime(" + k + ")");
var out = fmt(firstkprime(k));
//console.log(out);

//Write to file
var fs = require('fs');
var outfile = "task2.txt";
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "\nTo: " + outfile);
