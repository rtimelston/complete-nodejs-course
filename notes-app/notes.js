const fs = require('fs')
const chalk = require('chalk')

const NOTES_FILE = 'notes.json'

const getNotes = () => 'Your notes...'

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicates = notes.filter((note) => note.title === title)
    if(duplicates.length === 0) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green.inverse("The note was saved."))
    } else {
        console.log(chalk.red.inverse("A note by this title already exists."))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if(notesToKeep.length < notes.length) {
        console.log(chalk.green.inverse(`Note removed: ${title}`))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse(`Note not found: ${title}`))
    }
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync(NOTES_FILE, notesJSON)
}

const loadNotes = () => {
    try {
        const notesBuffer = fs.readFileSync(NOTES_FILE)
        const notesJSON = notesBuffer.toString()
        return JSON.parse(notesJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    getNotes: getNotes,
    removeNote: removeNote
}