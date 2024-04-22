import { Message } from './Message';
import { DoubleList } from '../own.structures/linked.lists/list/DoubleList';

export class Chat {

    private messages: DoubleList<Message>;

    public constructor(){
        this.messages = new DoubleList();
    }

    public getMessages(): DoubleList<Message> {
        return this.messages;
    }

    public setMessages( messages: DoubleList<Message>): void {
        this.messages = messages;
    }
}