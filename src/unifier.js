const fs = require('fs');
const { promisify } = require('util');
const path = require('path');
const yaml = require('js-yaml');
const deepmerge = require('deepmerge');

const {
  pipe,
  map,
  split,
  filter,
  sort,
  then,
  waitAll,
} = require('./utils');

/* ******* */

const readFile = promisify(fs.readFile);

const pathLength = file => file.split(path.sep).length;

const getValueOrDefault = def => val => {
  return val !== undefined ? val : def;
};

const mergeConfigs = configs => deepmerge(...configs);
/* ******* */

const sanitizeAndSortFiles = pipe(
  getValueOrDefault(""),
  split('\n'),
  filter(({ length }) => length),
  sort((a, b) => pathLength(a) - pathLength(b))
);

const getConfigsAsJson = pipe(
  map(file => readFile(file, 'utf8')),
  map(filePromise => filePromise.then(data => yaml.safeLoad(data))),
  waitAll,
);

const mergeAndDumpAsYaml = pipe(
  then(mergeConfigs),
  then(config => yaml.safeDump(config)),
);

/* ******* */

const unifier = pipe(
  sanitizeAndSortFiles,
  getConfigsAsJson,
  mergeAndDumpAsYaml,
);

/* ******* */

module.exports = {
  unifier,
};
