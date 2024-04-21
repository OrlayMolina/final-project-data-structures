import { DoubleNode } from "./DoubleNode";

export class DoubleList<T>{
    private firstNode: DoubleNode<T> | null;
    private lastNode: DoubleNode<T> | null;
    private size: number;

    public constructor(){
        this.firstNode = null;
        this.lastNode = null;
        this.size = 0;
    }

    /**
     * Adds a new Node with the specified data to the front of the List.
     * @param data 
     */
    public putInFront(data: T): void {
        const newNode: DoubleNode<T> = new DoubleNode(data);
        if(this.isEmpty()){
            this.firstNode = newNode;
            this.lastNode = newNode;    
        }else {
            newNode.setNextNode(this.firstNode);
            this.firstNode = newNode;
        }
        this.size++;
    }

    public putAtEnd(data: T): void {
        const newNode: DoubleNode<T> = new DoubleNode(data);
        if(this.isEmpty()){
            this.firstNode = newNode;
            this.lastNode = newNode;
        }else {
            newNode.setNextNode(this.firstNode);
            
        }
    }

    /**
     * Check if the Stack is empty
     * @returns true if the Stack is empty, false otherwise
     */
    public isEmpty(): boolean {
        return this.size === 0;
    }
}