const fs = require('fs');
let buff = fs.readFileSync(process.argv[2])
let lines = buff.toString().split('\n')
console.log(lines.length-1);