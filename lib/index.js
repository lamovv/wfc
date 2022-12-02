'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.uninstall = exports.install = void 0;

const cp = require('child_process');
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const l = (msg) => console.log(`wfc - ${msg}`);

function copySync(frc, trc) {
  if (!fs.existsSync(trc)) {
    fs.copyFileSync(frc, trc);
  }
}

function install(dir = process.cwd()) {
  try {
    const rctplDir = path.resolve(__dirname, '../rctpl');
    const rcFiles = glob.sync('*', {
      cwd: rctplDir,
      dot: true,
    });

    rcFiles.map((file) => {
      // 忽略vrc
      if (/\.versionrc/i.test(file)) {
        return;
      }
      const rc = path.join(dir, file.replace(/\.tpl$/, ''));

      copySync(path.join(rctplDir, file), rc);
    });

    try {
      cp.execSync('npx husky install');
    } catch (e) { }

    try {
      const pkg = require(path.resolve(dir, 'package.json'));
      if (!pkg.scripts?.postinstall) {
        cp.execSync('npm set-script postinstall "wfc install || true"');
      }
    } catch (e) { }
  } catch (e) {
    l('failed to install');
    throw e;
  }
  l('installed');
}
exports.install = install;

function uninstall() { }
exports.uninstall = uninstall;

function sv(dir = process.cwd()) {
  const rctpl = path.resolve(__dirname, '../rctpl/.versionrc.js');
  copySync(rctpl, path.join(dir, '.versionrc.js'));

  try {
    const pkg = require(path.resolve(dir, 'package.json'));
    if (!pkg.scripts?.newbranch) {
      cp.execSync('npm set-script newbranch "standard-version -r patch"');
    }
  } catch (e) { }
}
exports.sv = sv;

// 追加pub命令 prepub/publish
