import { Node } from "../Node";

export class IteratorSimpleList<T> implements Iterator<T> {
    private node: Node<T> | null;
    private position: number;

    constructor(node: Node<T> | null) {
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
}