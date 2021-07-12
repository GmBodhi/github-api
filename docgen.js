const { version } = require("./package.json");
const { readFileSync, writeFileSync } = require("fs");

const json = JSON.parse(readFileSync("./typedoc.json"));

json.json = `docs/${version}.json`;

writeFileSync("./typedoc.json", JSON.stringify(json) + "\n");
