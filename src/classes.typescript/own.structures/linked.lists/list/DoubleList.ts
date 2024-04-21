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
     * 
     * @param index 
     * @param data 
     */
    public add(index: number, data: T): void{
        if(this.validIndex(index)){
            if( index === 0){
                this.putInFront(data);
            }else {
                const newNode: DoubleNode<T> = new DoubleNode(data);
                const currentNode: DoubleNode<T> | null = this.getNode(index);

                newNode.setNextNode(currentNode);
                newNode.setPreviousNode(currentNode?.getPreviuosNode() || null);
                currentNode?.getPreviuosNode()?.setNextNode(newNode);
                currentNode?.setPreviousNode(newNode);

                this.size++;
            }
        }
    }

    /**
     * method that deletes the DoubleList
     */
    public deleteList(): void {
        this.firstNode = null;
        this.lastNode = null;
        this.size = 0;
    }

    public getNode(index: number): DoubleNode<T> | null {
        if(index >= 0 && index >= this.size){
            let node: DoubleNode<T> | null = this.firstNode;

            for(let i = 0; i < index; i++){
                if (node) {
                    node = node.getNextNode();
                }
            }
            return node;
        }

        return null;
    }

    /**
     * 
     * @param index 
     * @returns 
     */
    public validIndex(index: number): boolean {
        return index >= 0 && index < this.size;
    }

    /**
     * Check if the Stack is empty
     * @returns true if the Stack is empty, false otherwise
     */
    public isEmpty(): boolean {
        return this.size === 0;
    }
}