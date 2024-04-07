import { Node } from "./Node";

export class Stack<T> {
    
    private top: Node<T> | null;
    private capacity: number;

    constructor(capacity: number) {
        this.top = null;
        this.capacity = capacity;
    }

    /**
     * Check if the Stack is empty
     * @returns true if the Stack is empty, false otherwise
     */
    public isEmpty(): boolean {
        return this.top === null;
    }

    /**
     * Delete the elements of the Stack
     */
    public clearStack(): void {
        this.top = null;
        this.capacity = 0;
    }

    /**
     * @returns top attribute of the Stack
     */
    public getTop(): Node<T> | null {
        return this.top;
    }

    /**
     * @returns capacity attribute of the Stack
     */
    public getCapacity(): number {
        return this.capacity;
    }
}