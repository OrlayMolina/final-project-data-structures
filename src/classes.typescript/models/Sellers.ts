import { ISeller } from './../interfaces/Sellers.type';
import { Chat } from './Chat';
import { Post } from './Post';
import { Person } from "./Person";
import { Request } from './Request';
import { DoubleList } from "../own.structures/linked.lists/list/DoubleList";

export class Seller extends Person {
    
    private admin: boolean;
    private postList: DoubleList<Post>;
    private contactList: DoubleList<Seller>;
    private chatList: DoubleList<Chat>;
    private requestReceivedList: DoubleList<Request>;
    private requestSentList: DoubleList<Request>;

    public constructor({name, lastName, ID, address, userName, password, admin}: ISeller){
        super({name, lastName, ID, address, userName, password});
        this.admin = admin;
        this.contactList = new DoubleList();
        this.chatList = new DoubleList();
        this.requestReceivedList = new DoubleList();
        this.requestSentList = new DoubleList();
        this.postList = new DoubleList();
    }

    public getPostList(): DoubleList<Post> {
        return this.postList;
    }

    public setPostList(postList: DoubleList<Post>): void {
        this.postList = postList;
    }

    public getContactList(): DoubleList<Seller> {
        return this.contactList;
    }

    public setContactList(contactList: DoubleList<Seller>): void {
        this.contactList = contactList;
    }

    public getChatList(): DoubleList<Chat> {
        return this.chatList;
    }

    public setChatList(chatList: DoubleList<Chat>): void {
        this.chatList = chatList;
    }

    public getRequestReceivedList(): DoubleList<Request> {
        return this.requestReceivedList;
    }

    public setRequestReceivedList(requestReceivedList: DoubleList<Request>): void {
        this.requestReceivedList = requestReceivedList;
    }

    public getRequestSentList(): DoubleList<Request> {
        return this.requestSentList;
    }

    public setRequestSentList(requestSentList: DoubleList<Request>): void {
        this.requestSentList = requestSentList;
    }

    public isAdmin(): boolean {
        return this.admin;
    }

    public setAdmin(admin: boolean): void {
        this.admin = admin;
    }

    /**
     * Converts the Post object to a JSON object.
     * @returns JSON representation of the Post object.
     */
    public toJSON(): any {
        const personJSON = super.toJSON(); // Serializa las propiedades de Person
    
        return {
            ...personJSON, // Incluye las propiedades de Person en el objeto JSON final
            admin: this.admin,
            postList: this.postList.toJSON(),
            contactList: this.contactList.toJSON(),
            chatList: this.chatList.toJSON(),
            requestReceivedList: this.requestReceivedList.toJSON(),
            requestSentList: this.requestSentList.toJSON()
        };
    }
}