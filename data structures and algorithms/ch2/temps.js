class Temps {
  constructor() {
    this.dataStore = [];
  }
  add(temp) {
    this.dataStore.push(temp);
  }

  average(arr) {
    return (
      arr.reduce((acc, curr) => {
        acc += curr;
        return acc;
      }, 0) / arr.length
    );
  }

  specificWeekAverage(index) {
    let weekTemps = this.dataStore[index];
    return this.average(weekTemps);
  }

  monthlyAverage() {
    return (
      this.dataStore
        .map((weekTemp) => this.average(weekTemp))
        .reduce((acc, curr) => {
          acc += curr;
          return acc;
        }, 0) / this.dataStore.length
    ).toFixed(2);
  }

  allWeekAverages() {
    let weekTempAverages = this.dataStore.map((weekTemps, index) => {
      return this.specificWeekAverage(index);
    });
    weekTempAverages.forEach((week, index) =>
      console.log(
        'Week ' +
          (index + 1) +
          ' has an average temperature of ' +
          week.toFixed(2)
      )
    );
  }
}

let monthlyTemps = new Temps();

let weeklyTemps = [];
for (let i = 1; i <= 30; i++) {
  const random = 100 - Math.floor(Math.random() * 90);
  weeklyTemps.push(random);

  if (i % 7 == 0) {
    monthlyTemps.add(weeklyTemps);
    weeklyTemps = [];
  }
}

// console.log(monthlyTemps.specificWeekAverage(0));
// console.log(monthlyTemps.monthlyAverage());
monthlyTemps.allWeekAverages();
