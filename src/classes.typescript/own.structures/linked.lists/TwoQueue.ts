import { Queue } from "./Queue";
import { Node } from "./Node";

export class TwoQueue<T> extends Queue<T> {
    
    constructor(){
        super();
    }

    /**
     * Inserts at the end of the TwoQueue
     * @param data Data to be added to the Queue
     */
    public putAnEnd(data: T): void {
        this.enqueue(data);
    }

    /**
     * 
     * @param data Data to be added in front of the TwoQueue
     */
    public putInFront(data: T): void {
        const newNode: Node<T> = new Node(data);
        if(this.isEmpty()){
            this.lastNode = newNode;
        }
        newNode.setNextNode(this.firstNode);
        this.firstNode = newNode;
    }

    /**
     * Check if the TwoQueu is empty
     * @returns true if the Stack is empty, false otherwise
     */
    public isEmpty(): boolean {
        return this.isEmpty();
    }

    /**
     * 
     * @returns the first element of the TwoQueue thatis removed
     */
    public removeInFront(): T {
        if(this.isEmpty()){
            throw new Error("TwoQueue is empty");
        }

        const value: T = this.diqueue();
        return value;
    }

    /**
     * 
     * @returns the last element of the TwoQueue that is removed
     */
    public removeAnEnd(): T {

        let aux: T;
        if(!this.isEmpty()){
            if(this.firstNode === this.lastNode){
                aux = this.diqueue();
            }else {
                const node: Node<T> = this.firstNode!;
                while(node.getNextNode() !== this.lastNode){
                    node.setNextNode(node.getNextNode());
                }

                node.setNextNode(null);
                aux = this.lastNode!.getData();
                this.lastNode = node;
     
            }
        }else {
            throw new Error("TwoQueue is empty");
        }

        return aux;

    }
}