class MemoizedBottomUpRodCutting {
  constructor(rodSize, priceArray) {
    this.rodSize = rodSize;
    // Rod Size + 1 to accomodate from 0 to rodSize
    this.solutionArray = new Array(priceArray.length);
    this.revenueArray = new Array(priceArray.length);
    this.initArrays();
    this.priceArray = priceArray;
  }

  initArrays = () => {
    for (let i = 0; i < this.rodSize + 1; i++) {
      this.solutionArray[i] = 0;
      this.revenueArray[i] = 0;
    }
  };

  extendedBottomUpCutRod = () => {
    this.revenueArray[0] = 0;

    for (let j = 1; j < this.priceArray.length; j++) {
      let q = Number.NEGATIVE_INFINITY;
      for (let i = 1; i <= j; i++) {
        if (q < this.priceArray[i] + this.revenueArray[j - i]) {
          q = this.priceArray[i] + this.revenueArray[j - i];
          this.solutionArray[j] = i;
        }
      }
      this.revenueArray[j] = q;
    }
  };

  printCutRodSolution = () => {
    let n = this.rodSize;
    while (n > 0) {
      console.log(this.solutionArray[n]);
      n = n - this.solutionArray[n];
    }
  };
}

let memoizedBottomUpRodCutting = new MemoizedBottomUpRodCutting(
  7,
  [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30]
);

memoizedBottomUpRodCutting.extendedBottomUpCutRod();
memoizedBottomUpRodCutting.printCutRodSolution();
