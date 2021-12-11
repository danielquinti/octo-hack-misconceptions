const fs = require('fs');

let rawdata = fs.readFileSync('db.json');
let entries = JSON.parse(rawdata);
var noYearReferences = [];

for (const entry in entries) {
    var references = entries[entry].references;
    for (const referenceId in references) {
        var reference = references[referenceId];
        if (reference.year == null) {
            console.log(reference.id);
            noYearReferences.push(reference);
        }
    }
}

console.log(noYearReferences.length);