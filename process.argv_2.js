process.argv returns an array containing complete command line. ['node', 'file path', 'arguments','as','strings']

var sum = 0;
var i = 2;

for (i; i < process.argv.length; i++) {
  sum = sum + Number(process.argv[i]);
}

console.log(sum);