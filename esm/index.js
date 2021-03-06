import isCI from 'is-ci';
import install from './install.js';
import uninstall from './uninstall.js';


if (isCI && !process.env.HUSKY_IGNORE_CI && !process.env.YORKIE_IGNORE_CI) {
    console.log('CI detected, skipping Git hooks installation');
    process.exit(0);
}

if (process.env.HUSKY_SKIP_INSTALL || process.env.YORKIE_SKIP_INSTALL) {
    console.log(
        `env variable HUSKY_SKIP_INSTALL is set to ${process.env
            .HUSKY_SKIP_INSTALL}, skipping Git hooks installation`
    );
    process.exit(0);
}

export default {install, uninstall};
