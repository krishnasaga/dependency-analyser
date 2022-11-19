'use strict';

const windowGui = require('..');
const assert = require('assert').strict;

assert.strictEqual(windowGui(), 'Hello from windowGui');
console.info("windowGui tests passed");
