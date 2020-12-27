const yargs = require('yargs')
const chalk = require('chalk')
const {addNotes, removeNote, readAllNotes, getBody} = require('./note.js')

yargs.command({
    command: 'add',
    describe: 'This adds the line in notes',
    builder: {
        title: {
            describe: 'This includes notes Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Notes Title',
            demandOption: true,
            type: 'string'
        }

    },
    handler: (argv) => {
        console.log(argv.title + " | " + argv.body)
        addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove the notes',
    builder: {
        title: {
            describe: 'This includes notes Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler: () =>  {
        console.log(readAllNotes())
    }
})

yargs.command({
    command: 'read',
    describe: 'read the notes',
    builder: {
        title: {
            describe: 'This includes notes Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) =>  {
        JSON.stringify(getBody(argv.title))
    }
})


//console.log(chalk.blue.italic('hello'))
//console.log(yargs.argv)
yargs.parse();
