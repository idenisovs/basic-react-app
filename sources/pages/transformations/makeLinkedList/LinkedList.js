export default class LinkedList {
  position = 0;
  nodes;

  get CurrentNode() {
    return this.nodes[this.position];
  }

  get IsPreviousAvailable() {
    return this.isPrevAvailable = this.position > 0;
  }

  get IsNextAvailable() {
    return this.position < this.nodes.length - 1;
  }

  constructor(list = []) {
    this.nodes = list;
    this.isNextAvailable = list.length > 0;
  }

  previous() {
    if (!this.isPrevAvailable) {
      return;
    }

    this.position--;

    return this.nodes[this.position];
  }

  next() {
    if (!this.isNextAvailable) {
      return;
    }

    this.position++;

    return this.nodes[this.position];
  }
}