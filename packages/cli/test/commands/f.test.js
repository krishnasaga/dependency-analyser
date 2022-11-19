"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@oclif/test");
describe('f', () => {
    test_1.test
        .stdout()
        .command(['f'])
        .it('runs hello', ctx => {
        (0, test_1.expect)(ctx.stdout).to.contain('hello world');
    });
    test_1.test
        .stdout()
        .command(['f', '--name', 'jeff'])
        .it('runs hello --name jeff', ctx => {
        (0, test_1.expect)(ctx.stdout).to.contain('hello jeff');
    });
});
//# sourceMappingURL=f.test.js.map