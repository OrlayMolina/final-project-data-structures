import { Node } from "./Node";
export class Queue<T> {

    public firstNode: Node<T> | null;
    public lastNode: Node<T> | null;
    public size: number;

    constructor(){
        this.firstNode = null;
        this.lastNode = null;
        this.size = 0;
    }

    /**
     * Add an item to the Queue
     * @param data Data to be added to the Queue
     */
    public enqueue(data: T) : void {
        const node: Node<T> = new Node(data);
        if(this.isEmpty()){
            this.firstNode = node;
            this.lastNode = node;
        }else {
            this.lastNode!.setNextNode(node);
            this.lastNode = node;
        }
        this.size++;
    }

    /**
     * Return and delete the element at the beginning of the Queue
     * @returns the first element of the Queue
     */
    public diqueue(): T {
        if(this.isEmpty()){
            throw new Error("Queue is empty");
        }
        const data: T = this.firstNode!.getData();
        this.firstNode = this.firstNode!.getNextNode();
        this.size--;
        return data;
    }

    /**
     * Check if the Stack is empty
     * @returns true if the Stack is empty, false otherwise
     */
    public isEmpty(): boolean {
        return this.size === null;
    }

    /**
     * Delete all the elements of the Queue
     */
    public deleteQueue(): void {
        this.firstNode = null;
        this.lastNode = null;
        this.size = 0;
    }

    /**
     * 
     * @returns the first element of the Queue
     */
    public getFirstNode(): Node<T> | null {
        return this.firstNode;
    }

    /**
     * 
     * @returns the last element of the Queue
     */
    public getLastNode(): Node<T> | null {
        return this.lastNode;
    }

    /**
     * 
     * @returns the size of the Queue
     */
    public getSize(): number {
        return this.size;
    }

    /**
     * 
     * @param queue 
     * @returns 
     */
    public sameQueue(queue: Queue<T>) : boolean {
        if(this.size !== queue.getSize()){
            return false;
        }

        let node : Node<T> | null = this.firstNode;
        let node2 : Node<T> | null = queue.getFirstNode();
        while(node !== null){
            if(node.getData() !== node2?.getData()){
                return false;
            }
            node = node.getNextNode();
            node2 = node2?.getNextNode();
        }
        return true; 
    }

    /**
     * Print the elements of the Queue
     */
    public print(): void {
        let node: Node<T> | null = this.firstNode;
        while(node !== null){
            console.log(node.getData());
            node = node.getNextNode();
        }
    }

    /**
     * 
     * @returns a copy of the Queue
     */
    protected clone: () => Queue<T> = () => {
        const queue: Queue<T> = new Queue<T>();
        let node: Node<T> | null = this.firstNode;
        while(node !== null){
            queue.enqueue(node.getData());
            node = node.getNextNode();
        }
        return queue;
    }
}