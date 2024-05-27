import { DoubleNode } from "./DoubleNode";

/**
 * Represents an iterator for iterating over elements of a doubly linked list.
 */
export class IteratorDoubleList<T> implements Iterator<T> {
    private node: DoubleNode<T> | null;
    private position: number;

    /**
     * Creates an instance of IteratorDoubleList.
     * @param node The starting node for the iteration.
     */
    constructor(node: DoubleNode<T> | null) {
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

    /**
     * Checks if there is a previous element in the iteration.
     * @returns True if there is a previous element, false otherwise.
     */
    hasPrevious(): boolean {
        return this.node !== null;
    }

    /**
     * Retrieves the previous element in the iteration.
     * @returns The previous element in the iteration.
     */
    previous(): T {
        const aux: T = this.node!.getData();
        this.node = this.node!.getPreviousNode();
        this.position--;
        return aux;
    }

    /**
     * Retrieves the index of the next element in the iteration.
     * @returns The index of the next element.
     */
    nextIndex(): number {
        return this.position + 1;
    }

    /**
     * Retrieves the index of the previous element in the iteration.
     * @returns The index of the previous element.
     */
    previousIndex(): number {
        return this.position - 1;
    }
}