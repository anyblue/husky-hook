// constant 常量
const {spawnSync} = require('child_process');
exports.GIT = (args) => spawnSync('git', args, { stdio: 'inherit' });
exports.RM = (args) => spawnSync('rm', args, { stdio: 'inherit' });
exports.HUSKY = (args) => spawnSync('node_modules/.bin/husky', args, { stdio: 'inherit' });

exports.START_INSTALL = 'start install husky hooks...';
exports.INSTALL_SUCCESS = 'husky hooks install complete.';
exports.INSTALL_FAIL = 'huksy hooks install failed.';
exports.START_UNINSTALL = 'start uninstall husky hooks...';
exports.UNINSTALL_SUCCESS = 'husky hooks uninstall complete.';
exports.UNINSTALL_FAIL = 'huksy hooks uninstall failed.';

exports.P_V_MSG = '.husky/verify-commit-msg.js';
exports.H_V_MSG = '../scripts/verify-commit-msg.js';
exports.P_MSG = '.husky/commit-msg';
exports.H_MSG = '../scripts/commit-msg';