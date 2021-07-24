class MaxHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  empty() {
    return this.heap.length === 0;
  }

  insert(value) {
    this.heap.push(value);
    this.upHeapify();
  }

  upHeapify() {
    let size = this.size();
    let index = size - 1;
    while (index > 0) {
      let parentIndex = (index - 1) / 2;
      if (this.heap[parentIndex] < this.heap[index]) {
        let temp = this.heap[parentIndex];
        this.heap[parentIndex] = this.heap[index];
        this.heap[index] = temp;
      }
      index = parentIndex;
    }
  }

  removeMax() {
    if (this.empty()) return;
    let size = this.size();
    let temp = this.heap[0];
    this.heap[0] = this.heap[size - 1];
    this.heap.pop();
    if (!this.empty()) {
      this.downHeapify();
    }
    return temp;
  }

  downHeapify() {
    let size = this.size();
    let parentIndex = 0;
    let lcIndex = 2 * parentIndex + 1;
    let rcIndex = 2 * parentIndex + 2;
    while (lcIndex < size) {
      let cmpIndex = parentIndex;
      if (this.heap[cmpIndex][0] < this.heap[lcIndex][0]) cmpIndex = lcIndex;
      if (rcIndex < size && this.heap[cmpIndex][0] < this.heap[rcIndex][0])
        cmpIndex = rcIndex;
      if (cmpIndex === parentIndex) break;
      let temp = this.heap[cmpIndex];
      this.heap[cmpIndex] = this.heap[parentIndex];
      this.heap[parentIndex] = temp;

      parentIndex = cmpIndex;
      lcIndex = 2 * parentIndex + 1;
      rcIndex = 2 * rcIndex + 2;
    }
  }
}
