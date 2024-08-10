class GroupIterator {
  #position = 0;
  constructor(group) {
    this.group = group;
  }

  next() {
    if (this.#position == this.group.group.length) return { done: true };

    let value = {
      position: this.#position,
      value: this.group.group[this.#position],
    };

    this.#position++;
    return { value, done: false };
  }
}

module.exports = GroupIterator;
