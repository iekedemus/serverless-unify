const pipe = (...fns) => initialValue => {
  return fns.reduce((acc, fn) => fn(acc), initialValue);
};
const map = mapper => arr => arr.map(mapper);
const split = sep => str => str.split(sep);
const filter = test => arr => arr.filter(test);
const sort = sorter => arr => [...arr].sort(sorter);
const then = (resolveHandler, rejectHandler = () => {}) => {
  return promise => promise.then(resolveHandler).catch(rejectHandler);
};
const waitAll = Promise.all.bind(Promise);

module.exports = {
  pipe,
  map,
  split,
  filter,
  sort,
  then,
  waitAll,
};
