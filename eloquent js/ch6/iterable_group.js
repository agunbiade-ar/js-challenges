const Group = require('./group');
let GroupIterator = require('./GroupIterator');

Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this);
};

let g = new Group();
for (let i = 0; i < 4; ++i) {
  g.add(i + 1);
}
// console.log(g);

for (let item of g) {
  console.log(item);
}
