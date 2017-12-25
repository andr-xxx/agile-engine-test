export default class Sorting {
  isIncomeNumber() {
    return this.incomeTableBody.every(item => {
      return !isNaN(item[this.column]) && isFinite(item[this.column])
    })
  }

  isIncomeDate() {
    return this.incomeTableBody.every(item => {
      return new Date(item[this.column]).toString() !== 'Invalid Date';
    })
  }

  sortByNumber() {
    return this.incomeTableBody.sort((a, b) => {
      const start = this.inOrder ? a : b;
      const end = this.inOrder ? b: a;
      return start[this.column] - end[this.column];
    });
  }

  sortByDate() {
    return this.incomeTableBody.sort((a, b) => {
      const start = this.inOrder ? a : b;
      const end = this.inOrder ? b: a;
      return new Date(start[this.column]) - new Date(end[this.column]);
    });
  }

  defaultSort() {
    this.incomeTableBody.sort((a, b) => {
      const start = this.inOrder ? a : b;
      const end = this.inOrder ? b: a;
      if (start[this.column] < end[this.column]) return -1;
      if (start[this.column] > end[this.column]) return 1;
      return 0;
    });
  }

  sortTable(incomeArray, column, inOrder) {
    this.incomeTableBody = incomeArray.slice(1);
    this.column = column;
    this.inOrder = inOrder;
    if (this.isIncomeNumber()) { // ignore timestamp
      this.sortByNumber();
    } else if (this.isIncomeDate()) {
      this.sortByDate()
    } else {
      this.defaultSort();
    }

    return [incomeArray[0], ...this.incomeTableBody];
  }
}