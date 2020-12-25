const { require } = require("yargs");
const fs  = require('fs')
const chalk  = require('chalk')

const fs = require('fs')

const data = function() {
    return "Hello from Notes"
}

const addNotes = function(title, body) {

    const lines = readAllNotes();
    const existing = lines.filter(note => JSON.parse(note).title === title)

    if (existing.length === 0) {
        console.log(chalk.green.inverse("adding Note"))
        const newdata = lines.push({title, body})
        saveNotes(newdata)
    } else {
        console.log(chalk.red.inverse("Existing title and cannot override !!"))
    }

}

const saveNotes = function(notes){ 
    fs.writeFileSync("notes.json", JSON.stringify(notes))
}


const readAllNotes = function( ){
    try {
        const allNotes =  fs.readFileSync('notes.json')
        return JSON.stringify(allNotes)
    } catch (e) {
        console.log(chalk.green.inverse("Note.Json created 1st time and not found !!"))
        return []
    }
}


module.exports = addNotes;