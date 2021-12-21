// uninstall
const ora = require('ora');
const c = require('./constant.js');

function uninstall() {
    const spinner = ora(c.START_UNINSTALL).start();
    try {
        c.RM(['-rf', '.husky']);
        c.GIT(['config', '--unset', 'core.hooksPath']);
        c.GIT(['config', '--unset', 'gerrit.reviewUrl']);
        spinner.succeed(c.UNINSTALL_SUCCESS).stop();
    } catch (e) {
        spinner.fail(c.UNINSTALL_FAIL).stop();
        console.error(e);
    }
}

module.exports = uninstall;
