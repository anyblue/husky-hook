#!/usr/bin/env node
import h from './index.js';
import p from 'path';
import chalk from 'chalk';

function help(code) {
    console.log(`${chalk.bgBlue.white('Usage:')}
  husky-hooks install
  husky-hooks uninstall`);
    process.exit(code);
}
const [, , cmd, ...args] = process.argv;
const cmds = {
    install: () => (args.length > 0 ? help(2) : h.install()),
    uninstall: h.uninstall,
    '-v': () => console.log(require(p.join(__dirname, '../package.json')).version),
};
try {
    cmds[cmd] ? cmds[cmd]() : help(0);
} catch (e) {
    console.error(e.message);
    process.exit(1);
}
