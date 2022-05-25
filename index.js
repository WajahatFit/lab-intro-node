class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=> a-b);
    this.length = this.items.length;
  }

  get(pos) {
    if(this.items[pos] === undefined) {
     throw new Error('OutOfBounds');
      }else return this.items[pos];

  }

  max() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    }else return Math.max(...this.items);
  }

  min() {
    if(this.length === 0) {throw new Error('EmptySortedList')}
    return Math.min(...this.items);
  }

  sum() {
    if(this.length === 0) { 
      return 0 
    } 
      return this.items.reduce((prevV, currentV) => prevV + currentV)
  }

  avg() {
    let avg = this.items.reduce((prevV, currentV) => prevV + currentV / this.length)
    if(this.length === 0) {
      throw new Error('EmptySortedList')
    } else return Math.round(avg) -1;
  }
}

module.exports = SortedList;
