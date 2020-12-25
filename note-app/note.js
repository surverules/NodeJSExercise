const { require } = require("yargs");

const fs = require('fs')

fs.writeFileSync("notes.txt", "very first line in the text file")

module.exports = fs;