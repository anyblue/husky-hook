// constant 常量
import {spawnSync} from 'child_process';
export default {
    GIT: (args) => spawnSync('git', args, { stdio: 'inherit' }),
    RM: (args) => spawnSync('rm', args, { stdio: 'inherit' }),
    HUSKY: (args) => spawnSync('node_modules/.bin/husky', args, { stdio: 'inherit' }),
    START_INSTALL: 'start install husky hooks...',
    INSTALL_SUCCESS: 'husky hooks install complete.',
    INSTALL_FAIL: 'huksy hooks install failed.',
    START_UNINSTALL: 'start uninstall husky hooks...',
    UNINSTALL_SUCCESS: 'husky hooks uninstall complete.',
    UNINSTALL_FAIL: 'huksy hooks uninstall failed.',
    P_V_MSG: '.husky/verify-commit-msg.js',
    H_V_MSG: '../scripts/verify-commit-msg.js',
    P_MSG: '.husky/commit-msg',
    H_MSG: '../scripts/commit-msg',
};
