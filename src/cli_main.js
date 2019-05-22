const { unifier } = require('./unifier');

unifier(process.argv[2]).then(config => console.log(config));
