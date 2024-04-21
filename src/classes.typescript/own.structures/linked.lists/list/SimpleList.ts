import { Node } from "../Node";

export class SimpleList<T> {
    private firstNode: Node<T> | null;
    private lastNode: Node<T> | null;
    private size: number;

    constructor() {
        this.size = 0;
        this.firstNode = null;
        this.lastNode = null;
    }

    /**
     * Adds a new node with the specified data to the front of the list.
     * @param {T} data The data to be added to the list.
     */
    public putInFront(data: T): void {
        const newNode: Node<T> = new Node(data);
        if(this.firstNode){
            newNode.setNextNode(this.firstNode);
            this.firstNode = newNode;
        }else{
            this.firstNode = newNode;
            this.lastNode = newNode;
        }
        this.size++;
    }

    /**
     * Gets the value of the node at the specified index in the list.
     * @param {number} index The index of the node to retrieve the value from.
     * @returns {T | null} The value of the node at the specified index, or null if the index is out of range.
     */
    public getNodeValueAt(index: number): T | null {
        if(!this.validIndex(index)){
            return null;
        }
        let currentNode = this.firstNode;
        for (let i = 0; i < index; i++) {
            if (currentNode) {
                currentNode = currentNode.getNextNode();
            } else {
                return null;
            }
        }
            return currentNode ? currentNode.getData() : null;
    }


    /**
     * Adds a new node with the specified data to the end of the list.
     * @param {T} data The data to be added to the list.
     */
    public putAtEnd(data: T): void {
        const newNode: Node<T> = new Node(data);
        if(this.lastNode){
            this.lastNode.setNextNode(newNode);
            this.lastNode = newNode;
        }else {
            this.firstNode = newNode;
            this.lastNode = newNode;
        }
        this.size++;
    }

    /**
     * 
     * @param index 
     * @returns 
     */
    public validIndex(index: number): boolean {
        return index >= 0 && index < this.size;
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }

    public printList(): void {
        let currentNode = this.firstNode;
        while(currentNode){
            console.log(currentNode.getData());
            currentNode = currentNode.getNextNode();
        }
    }

    public delete(nodeValue: T): T  {
        let node: Node<T> | null = this.firstNode;
        let previousNode: Node<T> | null = null;
        let nextNode: Node<T> | null = null;
        let found: boolean = false;
        
        while(node !== null){
            if(node.getData() === nodeValue){
                found = true;
                break;
            }
            previousNode = node;
            node = node.getNextNode();
        }

        if(found){
            if (node !== null) {
                nextNode = node.getNextNode();
                if (previousNode === null) {
                    this.firstNode = node.getNextNode();
                } else {
                    previousNode.setNextNode(nextNode);
                }

                if (nextNode === null) {
                    this.lastNode = previousNode;
                } else {
                    node.setNextNode(null);
                }

                node = null;
                this.size--;
            }
            return nodeValue;
        }
        throw new Error("Node not found");
    }

    /**
     * Gets the size of the list.
     * @returns {number} The number of elements in the list.
     */
    public getSize(): number {
        return this.size;
    }

    /**
     * Gets the first node of the list.
     * @returns {Node<T> | null} The first node of the list, or null if the list is empty.
     */
    public getFirstNode(): Node<T> | null {
        return this.firstNode;
    }
    
    /**
     * Gets the last node of the list.
     * @returns {Node<T> | null} The last node of the list, or null if the list is empty.
     */
    public getLastNode(): Node<T> | null {
        return this.lastNode;
    }
    
    /**
     * Sets the first node of the list.
     * @param {Node<T> | null} node The node to set as the first node of the list.
     */
    public setFirstNode(node: Node<T> | null): void {
        this.firstNode = node;
    }
    
    /**
     * Sets the last node of the list.
     * @param {Node<T> | null} node The node to set as the last node of the list.
     */
    public setLastNode(node: Node<T> | null): void {
        this.lastNode = node;
    }


    /**
     * Provides an iterator for iterating over the elements of the list.
     * @returns {Iterator<T>} An iterator object that allows iteration over the elements of the list.
     */
    public [Symbol.iterator](): Iterator<T> {
        let current = this.firstNode;
        return {
            next(): IteratorResult<T> {
                if (current) {
                    const value = current.getData();
                    current = current.getNextNode();
                    return { value, done: false };
                } else {
                    return { value: undefined as any, done: true };
                }
            }
        };
    }
}