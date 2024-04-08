export class Node<T> {

    private nextNode: Node<T> | null;
    private data: T;

    constructor(data: T, nextNode?: Node<T> | null) {
        this.data = data;
        this.nextNode = nextNode || null;
    }

    public getNextNode(): Node<T> | null {
        return this.nextNode;
    }

    public setNextNode(nextNode: Node<T> | null) : void {
        this.nextNode = nextNode;
    }

    public getData() : T {
        return this.data;
    }

    public setData(data: T) : void {
        this.data = data;
    }
}