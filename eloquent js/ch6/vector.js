class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vec) {
    return new Vec(this.x + vec.x, this.y + vec.y);
  }

  minus(vec) {
    return new Vec(this.x - vec.x, this.y - vec.y);
  }

  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

// let vec_x = new Vec(3, 4);
// let new_Vec = vec_x.plus({ x: 2, y: 9 });
// console.log(new_Vec);
// console.log(new_Vec.minus(new Vec(5, 4)));
// console.log(vec_x.length);
