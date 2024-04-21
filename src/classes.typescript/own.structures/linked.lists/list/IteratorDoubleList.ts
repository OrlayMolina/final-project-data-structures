import { DoubleNode } from "./DoubleNode";

export class IteratorDoubleList<T> implements Iterator<T> {
    private node: DoubleNode<T> | null;
    private position: number;

    constructor(node: DoubleNode<T> | null) {
        this.node = node;
        this.position = 0;
    }

    hasNext() {
        return this.node !== null;
    }

    next(): IteratorResult<T, any> {
        if (this.hasNext()) {
            const valor = this.node!.getData();
            this.node = this.node!.getNextNode();
            this.position++;
            return { value: valor, done: false };
        }
        return { value: undefined, done: true };
    }

    hasPrevious(): boolean {
        return this.node !== null;
    }

    previous(): T {
        const aux: T = this.node!.getData();
        this.node = this.node!.getPreviousNode();
        this.position--;
        return aux;
    }

    nextIndex(): number {
        return this.position + 1;
    }

    previousIndex(): number {
        return this.position - 1;
    }
}