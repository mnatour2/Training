const fs = require("fs");
const querystring = require("querystring");

fs.readFile("./data.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let arr = data.split("\n");
  const text = arr.map((line) => {
    return querystring.parse(line, "&", "=");
  });
  fs.writeFile("ready.json", JSON.stringify(text), function (err) {
    if (err) return console.log(err);
  });
});
