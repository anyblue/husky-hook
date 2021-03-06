import fs from 'fs';
import {dirname, join} from 'path';
import ora from 'ora';
import c from './constant.js';

const __dirname = dirname(new URL(import.meta.url).pathname);

function path(dir) {
    return join(process.cwd(), dir);
}

function install() {
    const spinner = ora(c.START_INSTALL).start();
    try {
        // 运行husky install，生成husky文件，修改git默认hooksPath
        c.HUSKY(['install']);

        // 不存在commit-msg钩子
        if (!fs.existsSync(path(c.P_MSG))) {
            c.HUSKY(['add', c.P_MSG, '']);
            fs.appendFileSync(path(c.P_MSG), fs.readFileSync(join(__dirname, c.H_MSG)));
            fs.copyFileSync(join(__dirname, c.H_V_MSG), path(c.P_V_MSG));
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

export default install;
