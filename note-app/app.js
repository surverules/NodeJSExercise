const yargs = require('yargs')
const chalk = require('chalk')
const { describe } = require('yargs')

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
    handler: function(argv){
        console.log(argv.title,  argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove the notes',
    handler: function() {
        console.log('removing line from notes')
    }
})

yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler: function() {
        console.log('list lines from notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'read the notes',
    handler: function() {
        console.log('reading lines from notes')
    }
})


//console.log(chalk.blue.italic('hello'))
//console.log(yargs.argv)
yargs.parse();
