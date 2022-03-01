const fs = require('fs');
const ora = require('ora');
const p = require('path');
const c = require('./constant.js');

// module package path
function resolve(name = '', dir = __dirname) {
    return p.join(dir, name);
}
// project path
function proPath(dir) {
    return resolve(dir, process.cwd());
}

function install() {
    const spinner = ora(c.START_INSTALL).start();
    try {
        // 运行husky install，生成husky文件，修改git默认hooksPath
        c.HUSKY(['install']);

        // 不存在commit-msg钩子
        if (!fs.existsSync(proPath(c.P_MSG))) {
            c.HUSKY(['add', c.P_MSG, '']);
            fs.appendFileSync(proPath(c.P_MSG), fs.readFileSync(resolve(c.H_MSG)));
            fs.copyFileSync(resolve(c.H_V_MSG), proPath(c.P_V_MSG));
        }

        const {status} = c.GIT(['config', '--get', 'gerrit.reviewUrl']);
        if (status !== 0) {
            c.GIT(['config', '--local', 'gerrit.reviewUrl', ''])
        }

        spinner.succeed(c.INSTALL_SUCCESS).stop();
    } catch (e) {
        spinner.fail(c.INSTALL_FAIL).stop();
        console.error(e);
    }
}

module.exports = install;
