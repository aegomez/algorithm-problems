import { CircularQueue } from "./12-circularQueue";

test("Creates a default-sized queue", () => {
  const q = new CircularQueue();

  expect(q.size).toBe(10);
  expect(q.isEmpty()).toBe(true);
});

test("Creates a custom-sized queue", () => {
  const n = 5;
  const q = new CircularQueue(n);

  expect(q.size).toBe(n);
  expect(q.isEmpty()).toBe(true);
});

test("Enqueues new elements", () => {
  const q = new CircularQueue<number>();
  q.enqueue(2);
  q.enqueue(0);
  q.enqueue(2);
  q.enqueue(1);
  const status = q.getStatus();

  expect(q.isEmpty()).toBe(false);
  expect(q.isFull()).toBe(false);
  expect(status.head).toBe(0);
  expect(status.tail).toBe(3);
  expect(status.queue).toEqual([2, 0, 2, 1]);
});

test("Trying to enqueue to a full queue throws an error", () => {
  const q = new CircularQueue(2);
  q.enqueue(1);
  q.enqueue(2);

  expect(() => q.enqueue(3)).toThrow("Queue is full");
});

test("Dequeues elements", () => {
  const q = new CircularQueue<string>(20);
  for (let char of "Hello there.") {
    q.enqueue(char);
  }
  let s = q.getStatus();

  expect(s.head).toBe(0);
  expect(s.tail).toBe(11);

  expect(q.dequeue()).toBe("H");
  expect(q.dequeue()).toBe("e");
  expect(q.dequeue()).toBe("l");

  s = q.getStatus();

  expect(s.head).toBe(3);
  expect(s.tail).toBe(11);
  expect(s.queue.join("")).toBe("lo there.");
});

test("Trying to dequeue from an empty queue throws an error", () => {
  const q = new CircularQueue();

  expect(() => q.dequeue()).toThrow("Queue is empty");
});

test("Queues elements circularly", () => {
  const q = new CircularQueue(10);
  // enqueue 10 elements
  for (let i = 0; i < 10; i++) {
    q.enqueue(i);
  }
  let s = q.getStatus();

  expect(q.isFull()).toBe(true);
  expect(s.head).toBe(0);
  expect(s.tail).toBe(9);
  expect(s.queue).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  // dequeue 5 elements
  for (let j = 0; j < 5; j++) {
    q.dequeue();
  }
  s = q.getStatus();

  expect(q.isFull()).toBe(false);
  expect(s.head).toBe(5);
  expect(s.tail).toBe(9);

  // enqueue 5 new elements, making the head pointer
  // to overflow back to the beginning
  for (let k = 1; k < 6; k++) {
    q.enqueue(k * 10);
  }
  s = q.getStatus();

  expect(q.isFull()).toBe(true);
  expect(s.head).toBe(5);
  expect(s.tail).toBe(4);
  expect(s.queue).toEqual([5, 6, 7, 8, 9, 10, 20, 30, 40, 50]);
});

test("Dequeuing all elements resets head and tail to -1", () => {
  const q = new CircularQueue(3);
  q.enqueue(true);
  q.enqueue(false);
  q.dequeue();
  q.dequeue();
  const s = q.getStatus();

  expect(q.isEmpty()).toBe(true);
  expect(s.head).toBe(-1);
  expect(s.tail).toBe(-1);
  expect(s.queue).toEqual([]);
});

test("Peeks first element without removing it", () => {
  const q = new CircularQueue<any[]>();
  q.enqueue(["A"]);
  q.enqueue(["B"]);
  const first = q.peek();
  const status = q.getStatus();

  expect(first).toEqual(["A"]);
  expect(status.queue.length).toBe(2);
  expect(status.queue[status.head]).toEqual(["A"]);
});
