'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.uninstall = exports.install = void 0;

const cp = require('child_process');
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const l = msg => console.log(`wfc - ${msg}`);

function install(dir = process.cwd()) {
  try {
    const rctplDir = path.resolve(__dirname, '../rctpl');
    const rcFiles = glob.sync('*', {
      cwd: rctplDir,
      dot: true,
    });

    rcFiles.map(file => {
      const rcPath = path.join(dir, file.replace(/\.tpl$/, ''));
      if (!fs.existsSync(rcPath)) {
        fs.copyFileSync(path.join(rctplDir, file), rcPath);
      }
    });

    // 追加pub命令 prepub/publish
  } catch (e) {
    l('failed to install');
    throw e;
  }
  l('installed');
}
exports.install = install;

function uninstall() {}
exports.uninstall = uninstall;
