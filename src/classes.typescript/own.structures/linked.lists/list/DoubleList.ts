import { DoubleNode } from "./DoubleNode";
import { IteratorDoubleList } from "./IteratorDoubleList";

export class DoubleList<T> implements Iterable<T>{
    private firstNode: DoubleNode<T> | null;
    private lastNode: DoubleNode<T> | null;
    private size: number;

    public constructor(){
        this.firstNode = null;
        this.lastNode = null;
        this.size = 0;
    }

    /**
     * Provides an iterator for iterating over the elements of the list.
     * @returns {Iterator<T>} An iterator object that allows iteration over the elements of the list.
     */
    [Symbol.iterator](): Iterator<T> {
        return new IteratorDoubleList(this.firstNode);
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
            this.lastNode?.setNextNode(newNode);
            newNode.setPreviousNode(this.lastNode);
            this.lastNode = newNode;
        }
        this.size++;
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
                newNode.setPreviousNode(currentNode?.getPreviousNode() || null);
                currentNode?.getPreviousNode()?.setNextNode(newNode);
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

        if( index >= 0 && index < this.size ) {
			return true;
		}

		throw new Error("Index out the bounds of the list");
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
            auxNode = auxNode.getPreviousNode();
        }
        console.log("");
    }

    
    public delete(nodeValue: T): T {
        let node: DoubleNode<T> | null = this.searchNode(nodeValue);

        if(node !== null){
            const previousNode: DoubleNode<T> | null = node.getPreviousNode();
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

    /**
     * Searches for a node with the specified data in the list.
     * 
     * @param data The data to search for in the nodes.
     * @returns The node containing the data, or null if not found.
     */
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

    /**
     * Modifies the data of a node at the specified index in the list.
     * 
     * @param index The index of the node to modify.
     * @param newdata The new data to assign to the node.
     */
    public modifyNode(index: number, newdata: T): void{
        if(this.validIndex(index)){
            const node: DoubleNode<T> | null = this.getNode(index);
            node?.setData(newdata);
        }
    }

    public getNodePosition(data: T): number {
        let i: number = 0;

        for(let aux: DoubleNode<T> | null = this.firstNode; aux !== null; aux = aux.getNextNode()){
            if(aux.getData() === data){
                return i;
            }
            i++;
        }

        return -1;
    }

    public get(index: number): T | null {
        if(this.validIndex(index)){
            const n: DoubleNode<T> | null = this.getNode(index);

            if(n !== null){
                return n.getData();
            }
        }

        return null;
    }

    /**
     * Converts the DoubleList object to a JSON object.
     * @returns JSON representation of the DoubleList object.
     */
    public toJSON(): any {
        let node = this.firstNode;
        const elements = [];
        while (node !== null) {
            elements.push(node.getData());
            node = node.getNextNode();
        }
        return elements;
    }

    
}