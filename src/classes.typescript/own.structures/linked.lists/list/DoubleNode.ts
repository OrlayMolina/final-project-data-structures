/**
 * Represents a node in a doubly linked list.
 */
export class DoubleNode<T> {

    private nextNode: DoubleNode<T> | null;
    private previousNode: DoubleNode<T> | null;
    private nodeValue: T;

   /**
     * Creates an instance of DoubleNode.
     * @param nodeValue The value to be stored in the node.
     * @param nextNode Reference to the next node in the list.
     * @param previousNode Reference to the previous node in the list.
     */
   public constructor(nodeValue: T, nextNode?: DoubleNode<T> | null, previousNode?: DoubleNode<T> | null){
    this.nodeValue = nodeValue;
    this.nextNode = nextNode || null;
    this.previousNode = previousNode || null;
}

    /**
     * Sets the next node in the list.
     * @param nextNode The next node to be set.
     */
    public setNextNode(nextNode: DoubleNode<T> | null): void{
        this.nextNode = nextNode;
    }
    
    /**
     * Retrieves the next node in the list.
     * @returns The next node in the list, or null if there is no next node.
     */
    public getNextNode(): DoubleNode<T> | null {
        return this.nextNode;
    }
    
    /**
     * Retrieves the value stored in the node.
     * @returns The value stored in the node.
     */
    public getData(): T {
        return this.nodeValue;
    }
    
    /**
     * Sets the value to be stored in the node.
     * @param nodeValue The value to be set.
     */
    public setData(nodeValue: T): void {
        this.nodeValue = nodeValue;
    }
    
    /**
     * Sets the previous node in the list.
     * @param previousNode The previous node to be set.
     */
    public setPreviousNode(previousNode: DoubleNode<T> | null): void {
        this.previousNode = previousNode;
    }
    
    /**
     * Retrieves the previous node in the list.
     * @returns The previous node in the list, or null if there is no previous node.
     */
    public getPreviousNode(): DoubleNode<T> | null {
        return this.previousNode;
    }
}