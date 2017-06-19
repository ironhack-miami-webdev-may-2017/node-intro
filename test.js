var myChalk = require('chalk');
var myKirbyDance = require('kirby-dance');


console.log( myChalk.blue.bgYellow('Hello, world!') );

for (var i = 1; i <= 10; i += 1) {
  console.log('Hello, errbody. #' + myChalk.cyan(i));
}

console.log(
  myChalk.magenta( myKirbyDance(5) )
);

console.log( myChalk.red.bgGreen('All done.') );
