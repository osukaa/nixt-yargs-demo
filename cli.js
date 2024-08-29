#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv))
  .command('hello', 'Say hello', (yargs) => {
    yargs.option('name', {
      alias: 'n',
      description: 'Your name',
      type: 'string',
    })
  }, (argv) => {
    const name = argv.name || 'World'
    console.log(`Hello, ${name}!`)
  })
  .parse();