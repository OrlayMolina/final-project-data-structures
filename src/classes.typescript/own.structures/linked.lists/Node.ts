/**
 * Represents a node in a linked list.
 */
export class Node<T> {

    private nextNode: Node<T> | null;
    private data: T;

    /**
     * Creates an instance of Node.
     * @param data The data to be stored in the node.
     * @param nextNode Optional reference to the next node in the list.
     */
    constructor(data: T, nextNode?: Node<T> | null) {
        this.data = data;
        this.nextNode = nextNode || null;
    }

    /**
     * Gets the reference to the next node in the list.
     * @returns The reference to the next node, or null if there is no next node.
     */
    public getNextNode(): Node<T> | null {
        return this.nextNode;
    }

    /**
     * Sets the reference to the next node in the list.
     * @param nextNode The node to be set as the next node.
     */
    public setNextNode(nextNode: Node<T> | null): void {
        this.nextNode = nextNode;
    }

    /**
     * Gets the data stored in the node.
     * @returns The data stored in the node.
     */
    public getData(): T {
        return this.data;
    }

    /**
     * Sets the data stored in the node.
     * @param data The data to be stored in the node.
     */
    public setData(data: T): void {
        this.data = data;
    }
}