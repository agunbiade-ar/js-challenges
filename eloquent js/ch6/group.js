class Group {
  #counter = 0; // private variable
  constructor() {
    this.group = [];
  }

  add(item) {
    if (this.group.indexOf(item) == -1) {
      this.group[this.#counter] = item;
      this.#counter++;
    }
  }

  delete(item) {
    //if the item is in the group array
    if (this.group.indexOf(item) != -1)
      this.group = this.group.filter((el) => el !== item);
  }

  has(item) {
    if (this.group.indexOf(item) != -1) return true;
    return false;
  }

  static from(iterable) {
    let newgroup = new Group();
    iterable.forEach((el) => {
      newgroup.add(el);
    });
    return newgroup;
  }
}

let g = new Group();

g.add(4);
// g.add(5);
// g.delete(4);
// console.log(g);
// console.log(Group.from([1, 2, 3, 4]));
// console.log(g.group[0]);
module.exports = Group;
