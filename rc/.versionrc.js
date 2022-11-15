const { resolve } = require('path');
const sv = require(resolve(process.cwd(), 'package.json')).version;
const av = sv.split('.');
av[2]++;
const v = av.slice(0, 3).join('.');

module.exports = {
  silent: true,
  tagPrefix: '',
  skip: {
    changelog: true,
    commit: true,
    tag: true
  },
  scripts: {
    postbump: `git checkout -b daily/${v} && git push --set-upstream origin daily/${v}`,
  },
}
