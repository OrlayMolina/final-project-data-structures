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

    public getNodeValue(index: number): T | null {
        let temporalNode: DoubleNode<T> | null = this.getNode(index);
        let counter: number = 0;

        if(this.validIndex(index)){
            temporalNode = this.firstNode;

            while(counter < index){
                temporalNode = temporalNode?.getNextNode() || null;
                counter++;
            }
        }

        if(temporalNode !== null){
            return temporalNode.getData();
        }else{
            return null;     
        }
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

    /**
     * Print the List
     */
    public printList(): void {
        let auxNode: DoubleNode<T> | null = this.firstNode;
        while(auxNode){
            console.log(auxNode.getData());
            auxNode = auxNode.getNextNode();
        }
        console.log("");
    }

    /**
     * Print the List in reverse
     */
    public printReverseList(): void {
        let auxNode: DoubleNode<T> | null = this.lastNode
        while(auxNode){
            console.log(auxNode.getData());
            auxNode = auxNode.getPreviuosNode();
        }
        console.log("");
    }

    public delete(nodeValue: T): T {
        let node: DoubleNode<T> | null = this.searchNode(nodeValue);

        if(node !== null){
            const previousNode: DoubleNode<T> | null = node.getPreviuosNode();
            const nextNode: DoubleNode<T> | null = node.getNextNode();

            if(previousNode === null){
                this.firstNode = nextNode;
            }else{
                previousNode.setNextNode(nextNode);
            }

            if(nextNode === null){
                this.lastNode = previousNode;
            }else {
                nextNode.setPreviousNode(previousNode)
            }
            
            node = null;
            this.size--;

            return nodeValue;

        }

        throw new Error("The node was not found");
    }

    /**
     * Removes and returns the first element from the list.
     * 
     * @returns The value of the removed element.
     * @throws {Error} If the list is empty.
     */
    public deleteFirst(): T {
        if (!this.isEmpty()) {
            const auxNode: DoubleNode<T> | null = this.firstNode;
            if (auxNode) {
                const nodeValue: T = auxNode.getData();
                this.firstNode = auxNode.getNextNode() || null;
    
                if (this.firstNode === null) {
                    this.lastNode = null;
                } else {
                    this.firstNode.setPreviousNode(null);
                }
    
                this.size--;
                return nodeValue;
            }
        }
    
        throw new Error("The list is empty");
    }

    public deleteLast(): T {
        if (!this.isEmpty()) {
            if (this.lastNode) {
                const nodeValue: T = this.lastNode.getData();
                const previousNode: DoubleNode<T> | null = this.getNode(this.size - 2);
                this.lastNode = previousNode;
    
                if (this.lastNode === null) {
                    this.firstNode = null;
                } else {
                    previousNode?.setNextNode(null);
                }
    
                this.size--;
                return nodeValue;
            }
        }
    
        throw new Error("The list is empty");
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

    public searchNode(data: T): DoubleNode<T> | null {
        let auxNode: DoubleNode<T> | null = this.firstNode;
        while(auxNode !== null){
            if(auxNode.getData() === data){
                return auxNode;
            }

            auxNode = auxNode.getNextNode();
        }

        return null;
    }
}