const fs = require('fs');

let rawdata = fs.readFileSync('db.json');
let entries = JSON.parse(rawdata);

console.log(entries);