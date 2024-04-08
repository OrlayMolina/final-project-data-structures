import { Node } from "./Node";

export class Stack<T> {
    
    private top: Node<T> | null;
    private capacity: number = 0;

    constructor() {
        this.top = null;
    }

    /**
     * Check if the Stack is empty
     * @returns true if the Stack is empty, false otherwise
     */
    public isEmpty(): boolean {
        return this.top === null;
    }

    /**
     * Delete the elements of the Stack
     */
    public clearStack(): void {
        this.top = null;
        this.capacity = 0;
    }

    /**
     * Push an item onto the Stack - push
     * @param data to be pushed into the Stack
     */
    public push(data: T) : void {

        const node: Node<T> = new Node(data);
        node.setNextNode(this.top);
        this.top = node;

        if (this.capacity === null) {
            this.capacity = 0;
        }
    
        this.capacity++;
    }

    /**
     * 
     * @returns the top element of the Stack
     */
    public pop(): T {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
    
        const data: T = this.top!.getData(); 
        this.top = this.top!.getNextNode(); 

        if (this.capacity === null) {
            this.capacity = 0;
        }

        this.capacity--;
    
        return data;
    }

    /**
     * @returns top attribute of the Stack
     */
    public getTop(): Node<T> | null {
        return this.top;
    }

    /**
     * 
     * @returns the top element of the Stack
     */
    public getTopData(): T {
        return this.top!.getData();
    }

    /**
     * @returns capacity attribute of the Stack
     */
    public getCapacity(): number | null {
        return this.capacity;
    }

    /**
     * @returns the number of elements in the Stack
     */
    public size(): number {
        let count = 0;
        let currentNode = this.top;
    
        while (currentNode !== null) {
            count++;
            currentNode = currentNode.getNextNode();
        }
    
        return count;
    }

    /**
     * Adds a new stack
     * @param stack New stack
     */
    public add(stack: Stack<T>): void {
        const clone: Stack<T> = stack.clone();
        const aux: Stack<T> = new Stack<T>();
    
        while (!clone.isEmpty()) {
            aux.push(clone.pop()!);
        }
    
        while (!aux.isEmpty()) {
            this.push(aux.pop()!);
        }
    }

    /**
     * Prints a stack to the console
     */
    public print(): void {
        let aux: Node<T> | null = this.top;
        while (aux !== null) {
            console.log(aux.getData());
            aux = aux.getNextNode();
        }
    }

    protected clone(): Stack<T> {
        const clonedStack: Stack<T> = new Stack<T>();
        let currentNode = this.top;

        while(currentNode !== null){
            clonedStack.push(currentNode.getData());
            currentNode = currentNode.getNextNode();
        }
    
        return clonedStack;
    }
    

}