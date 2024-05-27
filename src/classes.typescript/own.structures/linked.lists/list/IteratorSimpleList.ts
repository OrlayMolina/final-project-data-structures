import { Node } from "../Node";

/**
 * Represents an iterator for iterating over elements of a singly linked list.
 */
export class IteratorSimpleList<T> implements Iterator<T> {
    private node: Node<T> | null;
    private position: number;
/**
     * Creates an instance of IteratorSimpleList.
     * @param node The starting node for the iteration.
     */
    constructor(node: Node<T> | null) {
        this.node = node;
        this.position = 0;
    }

    /**
     * Checks if there is a next element in the iteration.
     * @returns True if there is a next element, false otherwise.
     */
    hasNext() {
        return this.node !== null;
    }

    /**
     * Retrieves the next element in the iteration.
     * @returns An IteratorResult object containing the next element or indicating that the iteration is complete.
     */
    next(): IteratorResult<T, any> {
        if (this.hasNext()) {
            const valor = this.node!.getData();
            this.node = this.node!.getNextNode();
            this.position++;
            return { value: valor, done: false };
        }
        return { value: undefined, done: true };
    }
}