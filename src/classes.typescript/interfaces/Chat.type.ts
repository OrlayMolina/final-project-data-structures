import { Message } from "../models/Message";
import { DoubleList } from "../own.structures/linked.lists/list/DoubleList";

export interface IChat{
    messages: DoubleList<Message>;
}