'use strict';

const listImports = require('..');
const assert = require('assert').strict;

assert.strictEqual(listImports(), 'Hello from listImports');
console.info("listImports tests passed");
