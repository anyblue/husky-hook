#!/usr/bin/env node
import h from './index.js';
import p from 'path';
import chalk from 'chalk';
import fs from 'fs';

const __dirname = p.dirname(new URL(import.meta.url).pathname);

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
    '-v': () => console.log(JSON.parse(fs.readFileSync(p.join(__dirname, '../package.json'), 'utf8')).version),
};
try {
    cmds[cmd] ? cmds[cmd]() : help(0);
} catch (e) {
    console.error(e.message);
    process.exit(1);
}
