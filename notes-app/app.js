const chalk = require('chalk')
const fs = require('fs')
const yargs = require('yargs')
const notes = require('./notes')

yargs.command(
    'add', 
    'Adds a note', 
    {
        title: {
            alias: 't',
            type: "string",
            demandOption: true,
            description: "Title of the note"
        },
        body: {
            alias: 'b',
            type: "string",
            demandOption: true,
            description: "Body of the note"
        }
    },
    (argv) => notes.addNote(argv.title, argv.body)
)

yargs.command(
    "remove", 
    "Removes a note", 
    {
        title: {
            alias: 't',
            type: "string",
            demandOption: true,
            description: "The title of the note to be removed"
        }
    },
    (argv) => notes.removeNote(argv.title)
)


yargs.command('list', 'Lists all notes', () => console.log('Listing notes...'))
yargs.command("read", "Reads all notes", () => console.log('Reading notes...'))

yargs.parse()
