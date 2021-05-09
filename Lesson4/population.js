function nbYear(p0, percent, aug, p) {
    let years = 0;
    while(p0 <= p){
      p0 = parseInt(p0 + (p0 * percent / 100) + aug);
      console.log("p0 =", p0)
      years = years + 1;
      console.log("years =", years)
    }
    return years
  }
  console.log(nbYear(1500, 5, 100, 5000))