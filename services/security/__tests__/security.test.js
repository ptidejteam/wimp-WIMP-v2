'use strict';

const security = require('..');
const assert = require('assert').strict;

assert.strictEqual(security(), 'Hello from security');
console.info('security tests passed');
