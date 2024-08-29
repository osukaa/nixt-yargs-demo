'use strict';

const path = require('node:path');
const { test, suite } = require('node:test');
const nixt = require('nixt');

suite('hello command', () => {
  test('command with name', (t, done) => {
    nixt()
      .cwd(path.join(__dirname, '..'))
      .run('node cli.js hello --name=Oscar')
      .stdout('Hello, Oscar!')
      .end(done);
  });

  test('command with default', (t, done) => {
    nixt()
      .cwd(path.join(__dirname, '..'))
      .run('node cli.js hello')
      .stdout('Hello, World!')
      .end(done);
  });
});
