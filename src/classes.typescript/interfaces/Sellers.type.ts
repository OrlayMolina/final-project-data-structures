import { DoubleList } from "../own.structures/linked.lists/list/DoubleList";
import { Post } from "../models/Post";
import { Seller } from "../models/Sellers";
import { Chat } from "../models/Chat";


export interface ISeller{
    admin: boolean;
    postList: DoubleList<Post>;
    contactList: DoubleList<Seller>;
    chatList: DoubleList<Chat>;
    requestReceivedList: DoubleList<Request>;
    requestSentList: DoubleList<Request>;
}