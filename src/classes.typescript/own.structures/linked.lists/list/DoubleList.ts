import { DoubleNode } from "./DoubleNode";
import { IteratorDoubleList } from "./IteratorDoubleList";

/**
 * Represents a doubly linked list.
 */
export class DoubleList<T> implements Iterable<T>{
    private firstNode: DoubleNode<T> | null;
    private lastNode: DoubleNode<T> | null;
    private size: number;

    /**
     * Creates an instance of DoubleList.
     */
    public constructor(){
        this.firstNode = null;
        this.lastNode = null;
        this.size = 0;
    }

    /**
     * Provides an iterator for iterating over the elements of the list.
     * @returns An iterator object that allows iteration over the elements of the list.
     */
    [Symbol.iterator](): Iterator<T> {
        return new IteratorDoubleList(this.firstNode);
    }

    /**
     * Adds a new node with the specified data to the front of the list.
     * @param data The data to be added.
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

    /**
     * Adds a new node with the specified data to the end of the list.
     * @param data The data to be added.
     */
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
     * Adds a new node with the specified data at the specified index in the list.
     * @param index The index at which to add the data.
     * @param data The data to be added.
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
     * Deletes the entire list.
     */
    public deleteList(): void {
        this.firstNode = null;
        this.lastNode = null;
        this.size = 0;
    }

    /**
     * Retrieves the value of the node at the specified index in the list.
     * @param index The index of the node.
     * @returns The value of the node, or null if the index is out of bounds.
     */
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
     * Checks if the index is within the bounds of the list.
     * @param index The index to check.
     * @returns True if the index is valid, false otherwise.
     * @throws {Error} If the index is out of bounds.
     */
    public validIndex(index: number): boolean {

        if( index >= 0 && index < this.size ) {
			return true;
		}

		throw new Error("Index out the bounds of the list");
    }

    /**
     * Checks if the list is empty.
     * @returns True if the list is empty, false otherwise.
     */
    public isEmpty(): boolean {
        return this.size === 0;
    }

    /**
     * Prints the elements of the list.
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
     * Deletes the node containing the specified data from the list.
     * @param nodeValue The data to delete.
     * @returns The deleted data.
     * @throws {Error} If the node containing the data is not found.
     */
    public printReverseList(): void {
        let auxNode: DoubleNode<T> | null = this.lastNode
        while(auxNode){
            console.log(auxNode.getData());
            auxNode = auxNode.getPreviousNode();
        }
        console.log("");
    }

      /**
 * Deletes the node containing the specified data from the list.
 * @param nodeValue The data to delete.
 * @returns The deleted data.
 * @throws {Error} If the node containing the data is not found.
 */
    
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
     * Deletes the first node in the list and returns its value.
     * @returns The value of the deleted node.
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

    /**
     * Deletes the last node in the list and returns its value.
     * @returns The value of the deleted node.
     * @throws {Error} If the list is empty.
     */
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


    /**
     * Retrieves the node at the specified index in the list.
     * @param index The index of the node to retrieve.
     * @returns The node at the specified index, or null if the index is out of bounds.
     */
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
     * Searches for a node containing the specified data in the list.
     * @param data The data to search for.
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
     * Modifies the data of the node at the specified index in the list.
     * @param index The index of the node to modify.
     * @param newData The new data to assign to the node.
     */
    public modifyNode(index: number, newdata: T): void{
        if(this.validIndex(index)){
            const node: DoubleNode<T> | null = this.getNode(index);
            node?.setData(newdata);
        }
    }

    /**
     * Retrieves the position of the node containing the specified data in the list.
     * @param data The data to search for.
     * @returns The position of the node containing the data, or -1 if not found.
     */
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

    /**
     * Retrieves the data at the specified index in the list.
     * @param index The index of the data to retrieve.
     * @returns The data at the specified index, or null if the index is out of bounds.
     */
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
     * Converts the DoubleList object to a JSON representation.
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