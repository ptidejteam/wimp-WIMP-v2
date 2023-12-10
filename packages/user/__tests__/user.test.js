'use strict';

const user = require('..');
const assert = require('assert').strict;

assert.strictEqual(user(), 'Hello from user');
console.info('user tests passed');
