'use strict';

const gateway = require('..');
const assert = require('assert').strict;

assert.strictEqual(gateway(), 'Hello from gateway');
console.info('gateway tests passed');
// To run it you need to do npx lerna run test --scope="gateway"