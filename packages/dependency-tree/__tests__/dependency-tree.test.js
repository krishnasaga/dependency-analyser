'use strict';

const dependencyTree = require('..');
const assert = require('assert').strict;

assert.strictEqual(dependencyTree(), 'Hello from dependencyTree');
console.info("dependencyTree tests passed");
