const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const dom = new JSDOM(``, {
    url: "https://en.wikipedia.org/wiki/List_of_common_misconceptions",
    referrer: "https://en.wikipedia.org/wiki/List_of_common_misconceptions",
    contentType: "text/html",
    includeNodeLocations: true,
    storageQuota: 10000000
  });

console.log(dom);