class Node {
  private _next: Node | null = null;
  private _prev: Node | null = null;
  value: number;

  constructor (value: number) {
    this.value = value;
  }

  get next() {
    return this._next;
  }

  set next(node: Node | null) {
    this._next = node;
  }

  get prev() {
    return this._prev;
  }

  set prev(node: Node | null) {
    this._prev = node;
  }

  toString() {
    return this.value.toString();
  }
}