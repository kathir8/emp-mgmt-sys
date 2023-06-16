export class LinkedListNode<T> {
    constructor(public value: T, public next: LinkedListNode<T> | null = null) {}
}

export class Node {
    data; next;
    constructor(data: any, next?: any) {
        this.data = data
        this.next = next
    }
}

export interface LinkedListState<T> {
  head: LinkedListNode<T> | null;
  tail: LinkedListNode<T> | null;
  length: number;
}