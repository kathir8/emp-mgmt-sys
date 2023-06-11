
// Node containing the data and reference to next node
class Node {
    data; next;
    constructor(data:any, next?:any) {
        this.data = data
        this.next = next
    }
}

// Class to hold our data structure
export class LinkedList {
    head: any;
    tail: any;

    // Complexity: O(1)
    prepend(value:any) {
        const newNode = new Node(value, this.head);

        this.head = newNode;
        this.tail = this.tail ? this.tail : newNode;

        return this;
    }

    // Complexity: O(1)
    append(value:any) {
        const newNode = new Node(value);

        // If the linked list is empty
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return;
        }

        // Make the last item refer to the newly added node
        this.tail.next = newNode;
        // Make the newly added node the last/tail node
        this.tail = newNode;
    }

    // Complexity: O(n)
    traverse() {
        let currentNode = this.head;

        while (currentNode) {
            currentNode = currentNode.next;
        }
    }

    // Complexity: O(n)
    find(value:any) {
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.data === value) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    }

    // Complexity: O(1)
    deleteHead() {
        if (!this.head) {
            return;
        }

        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }
    }

    // Complexity: O(1)
    deleteNode(value:any) {
        if (!this.head) return

        let currentNode = this.head;
        let prevNode = this.head;

        while (currentNode) {
            if (currentNode.data === value) {
                prevNode.next = currentNode.next
                return
            }
            prevNode = currentNode
            currentNode = currentNode.next
        }
    }

    // Complexity: O(n)
    toArray() {
        const items = [];
        let currentNode = this.head;

        while (currentNode) {
            items.push(currentNode.data);
            currentNode = currentNode.next;
        }

        return items;
    }
}
