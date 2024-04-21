export class DoubleNode<T> {

    private nextNode: DoubleNode<T> | null;
    private previousNode: DoubleNode<T> | null;
    private nodeValue: T;

    public constructor(nodeValue: T){
        this.nodeValue = nodeValue;
        this.nextNode = null;
        this.previousNode = null;
    }

    public setNextNode(nextNode: DoubleNode<T> | null): void{
        this.nextNode = nextNode;
    }

    public setPreviousNode(previuosNode: DoubleNode<T> | null): void {
        this.previousNode = previuosNode;
    }

    public getNextNode(): DoubleNode<T> | null {
        return this.nextNode;
    }

    public getPreviuosNode():DoubleNode<T> | null {
        return this.previousNode;
    }

    public getData(): T {
        return this.nodeValue;
    }

}