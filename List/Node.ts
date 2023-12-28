export class Node<T> {
  private _next: Node<T> | null = null;
  private _prev: Node<T> | null = null;
  value: T;

  constructor (value: T) {
    this.value = value;
  }

  get next() {
    return this._next;
  }

  set next(node: Node<T> | null) {
    this._next = node;
  }

  get prev() {
    return this._prev;
  }

  set prev(node: Node<T> | null) {
    this._prev = node;
  }

}