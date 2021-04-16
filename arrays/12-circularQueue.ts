export class CircularQueue<T = any> {
  readonly size: number;
  private readonly elements: T[];
  private head: number;
  private tail: number;

  constructor(size = 10) {
    this.size = size;
    this.elements = Array(size);
    this.head = -1;
    this.tail = -1;
  }

  isEmpty(): boolean {
    return this.head === -1;
  }

  isFull(): boolean {
    return (this.tail + 1) % this.size === this.head;
  }

  enqueue(element: T): void {
    if (this.isFull()) {
      throw new Error("Queue is full");
    }
    if (this.isEmpty()) {
      this.head = 0;
    }
    this.tail = (this.tail + 1) % this.size;
    this.elements[this.tail] = element;
  }

  dequeue(): T {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    let element = this.elements[this.head];
    if (this.head === this.tail) {
      this.head = -1;
      this.tail = -1;
    } else {
      this.head = (this.head + 1) % this.size;
    }
    return element;
  }

  // return first element of the queue, without removing it
  peek(): T {
    return this.elements[this.head];
  }

  // return head, tail and queue for debug purposes
  getStatus(): { head: number; tail: number; queue: T[] } {
    let queue: T[] = [];
    if (!this.isEmpty()) {
      for (let i = this.head; ; i = (i + 1) % this.size) {
        queue.push(this.elements[i]);
        if (i === this.tail) break;
      }
    }
    return { head: this.head, tail: this.tail, queue };
  }
}
