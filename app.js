const _ = require('lodash');
const item = [1,[2,[3,[4]]]]
const useItem = _.flattenDeep(item)
console.log(useItem);
