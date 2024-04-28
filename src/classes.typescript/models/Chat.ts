import { Message } from './Message';
import { DoubleList } from '../own.structures/linked.lists/list/DoubleList';
/**
 * Represents a chat containing messages.
 */
export class Chat {

    private messages: DoubleList<Message>;

    public constructor(){
        this.messages = new DoubleList();
    }

    /**
     * Retrieves the list of messages in the chat.
     * @returns The list of messages.
     */

    public getMessages(): DoubleList<Message> {
        return this.messages;
    }

    /**
     * Sets the list of messages in the chat.
     * @param messages The list of messages to set.
     */
    
    public setMessages( messages: DoubleList<Message>): void {
        this.messages = messages;
    }
}