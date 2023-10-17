'use strict';

const users = require('..');
const assert = require('assert').strict;

assert.strictEqual(users(), 'Hello from users');
console.info('users tests passed');
