import { Message } from "../models/Message";
import { DoubleList } from "../own.structures/linked.lists/list/DoubleList";

/**
 * Defines a chat interface containing a list of messages.
 */
export interface IChat{
    messages: DoubleList<Message>;
}