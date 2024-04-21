export class DoubleNode<T> {

    private nextNode: DoubleNode<T> | null;
    private previousNode: DoubleNode<T> | null;
    private nodeValue: T;

    public constructor(nodeValue: T, nextNode?: DoubleNode<T> | null, previousNode?: DoubleNode<T> | null){
        this.nodeValue = nodeValue;
        this.nextNode = nextNode || null;
        this.previousNode = previousNode || null;
    }

    public setNextNode(nextNode: DoubleNode<T> | null): void{
        this.nextNode = nextNode;
    }

    public getNextNode(): DoubleNode<T> | null {
        return this.nextNode;
    }

    public getData(): T {
        return this.nodeValue;
    }

    public setData(nodeValue: T): void {
        this.nodeValue = nodeValue;
    }

    public setPreviousNode(previuosNode: DoubleNode<T> | null): void {
        this.previousNode = previuosNode;
    }

    public getPreviuosNode():DoubleNode<T> | null {
        return this.previousNode;
    }

}