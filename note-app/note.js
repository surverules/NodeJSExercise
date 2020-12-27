const fs  = require('fs')
const chalk  = require('chalk')

const data = () =>  {
    return "Hello from Notes"
}

const addNotes = (title, body) => {

    const lines = readAllNotes();
        const existing = lines.filter(note => note.title === title)

    if (existing.length === 0) {
        console.log(chalk.green.inverse("adding Note"))
        lines.push({title: title, body: body})
        console.log(title + " | " + body)
        saveNotes(lines)
    } else {
        console.log(chalk.red.inverse("Existing title and cannot override !!"))
    }

}


const removeNote = (title) => {

    const data = readAllNotes();
    const filterdata = data.filter(line => line.title !== title)

    if (filterdata.length < data.length) {
        saveNotes(filterdata)
        console.log(chalk.green.inverse("removed Note with Title: " + title))
    } else {
        console.log(chalk.red.inverse("No existing note found to remove"))
    }
}


const getBody = (title) => {
    const allNotes = readAllNotes()
    const data = allNotes.filter(note => note.title === title)

    if (data.length > 0) {
        console.log(chalk.green.inverse("Title found in notes"))
        console.log(data)
    } else {
        console.log(chalk.red.inverse("title not found in notes"))
    }
}


const saveNotes = (notes) => fs.writeFileSync("notes.json", JSON.stringify(notes))

const readAllNotes = () => {
    try {
        const allNotes =  fs.readFileSync('notes.json')
        return JSON.parse(allNotes)
    } catch (e) {
        console.log(chalk.green.inverse("note.Json created 1st time and not found !!"))
        console.log(e)
        return []
    }
}


module.exports = {addNotes, removeNote, readAllNotes, getBody};