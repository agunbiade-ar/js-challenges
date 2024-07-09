class Grades {
  constructor() {
    this.grades = [];
  }

  add(grade) {
    this.grades.push(grade);
  }

  average() {
    let total = 0;
    for (let grade of this.grades) {
      total += grade;
    }
    return total / this.grades.length;
  }
}

let g = new Grades();
g.add(4);
g.add(6);
g.add(8);

console.log(g.average());
