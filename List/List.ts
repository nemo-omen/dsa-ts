import { Node } from './Node';

export class List<T> {
  head: Node<T> | null = null;
  tail: Node<T> | null = null;
  length = 0;

  constructor (values?: T[]) {
    if (values) {
      values.forEach(value => this.push(value));
    }
  }

  push(value: T) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      node.prev = node;
      node.next = node;
    }

    if (this.tail) {
      node.prev = this.tail;
      node.next = this.head;
      this.tail.next = node;
      this.tail = node;
      this.head.prev = this.tail;
      this.length += 1;
    }
  }
}