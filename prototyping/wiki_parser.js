const fs = require('fs');

let rawdata = fs.readFileSync('db.json');
let entries = JSON.parse(rawdata);
var noYearReferences = [];
var years = [];
var outliers = [];

for (const entry in entries) {
    var references = entries[entry].references;
    for (const referenceId in references) {
        var reference = references[referenceId];
        if (reference.year == null) {
            noYearReferences.push(reference);
        } else {
            years.push(reference.year);
            if (reference.year <= 1900 || reference.year > 2021) {
                // console.log(reference);
                outliers.push(reference);
            }
        }
    }
}

// console.log(noYearReferences.length);
for (const year of years) {
    if (year <=1900 || year>2021) {
        
    }
    // console.log(year);
}