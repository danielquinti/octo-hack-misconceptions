import dbJSON from "./data/db.json";

const minOffset = 10;
const maxOffset = 2;

function getMisconceptionsByYear(year) {
  var misconceptions = [];
  for (const entry in dbJSON) {
    for (const reference of dbJSON[entry].references) {
      if (
        reference.year >= year - minOffset &&
        reference.year <= year + maxOffset
      ) {
        misconceptions.push(dbJSON[entry]);
        break;
      }
    }
  }
  return transformMisconceptions(misconceptions);
  // return misconceptions;
}

function transformMisconceptions(misconceptions) {
  const groupedMisconceptions = groupMisconceptions(misconceptions);
  const perfect = misconceptionArrayToJSON(groupedMisconceptions);
  return perfect;
}

function misconceptionArrayToJSON(misconceptions) {
    var newMisconceptions = [];
    for (var i = 0; i < misconceptions.length; i++) {
        newMisconceptions.push({
            themeName: misconceptions[i][0][0][0].theme,
            categories: []
        });
        for (var j = 0; j < misconceptions[i].length; j++) {
            newMisconceptions[i].categories.push({
                categoryName: misconceptions[i][j][0][0].category,
                subcategories: []
            });
            for (var k = 0; k < misconceptions[i][j].length; k++) {
                newMisconceptions[i].categories[j].subcategories.push({
                    subcategoryName: misconceptions[i][j][k][0].subcategory,
                    misconceptions: misconceptions[i][j][k]
                });
            }
        };
    }
    return newMisconceptions;
}

function groupMisconceptions(misconceptions) {
  // Accepts the array and key
  const groupBy = (array, f) => {
    let groups = {};
    array.forEach(function (o) {
      var group = JSON.stringify(f(o));
      groups[group] = groups[group] || [];
      groups[group].push(o);
    });
    return Object.keys(groups).map(function (group) {
      return groups[group];
    });
  };
  var results = groupBy(misconceptions, function (item) {
    return [item.theme];
  });
  for (var i = 0; i < results.length; i++) {
    results[i] = groupBy(results[i], function (item) {
      return [item.category];
    });
    for (var j = 0; j < results[i].length; j++) {
      results[i][j] = groupBy(results[i][j], function (item) {
        return [item.subcategory];
      });
    }
  }
  return results;
}
  /*
    [
        theme1,
        theme2,
        theme3 -> JSON: {
            name: "Biology",
            categories: [
                category1,º v
                category2,
                category3 -> JSON: {
                    name: "Mamals",
                    subcategories: [
                        Subcategory1,
                        Subcategory2,
                        Subcategory3 -> JSON: {
                            name: "Feniles",
                            misconceptions: [
                                misconception1
                                misconception2,
                                misconception3 -> JSON: {
                                    text: "asldijaslkjdhaslkjdha",
                                    references: [
                                        reference1,
                                        reference2,
                                        reference3 -> JSON: {
                                            text: "asdasd",
                                            year: "1890"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
    */
export default getMisconceptionsByYear;
