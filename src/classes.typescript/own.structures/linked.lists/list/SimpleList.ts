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
    public [Symbol.iterator](){
        let current = this.firstNode;
        return {
            next(){
                if(current){
                    const value = current.getData();
                    current = current.getNextNode();
                    return {value, done: false};
                }
            }
        }
    }
}