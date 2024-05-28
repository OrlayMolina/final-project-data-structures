import { ISeller } from './../interfaces/Sellers.type';
import { Chat } from './Chat';
import { Post } from './Post';
import { Person } from "./Person";
import { Request } from './Request';
import { DoubleList } from "../own.structures/linked.lists/list/DoubleList";

/**
 * Represents a seller, extending the Person class.
 */
export class Seller extends Person {
    
    admin: boolean;
    postList: DoubleList<Post> | undefined;
    contactList: DoubleList<Seller> | undefined;
    chatList: DoubleList<Chat> | undefined;
    requestReceivedList: DoubleList<Request> | undefined;
    requestSentList: DoubleList<Request> | undefined;

    /**
     * Creates an instance of Seller.
     * @param name The name of the seller.
     * @param lastName The last name of the seller.
     * @param ID The identification of the seller.
     * @param address The address of the seller.
     * @param userName The username of the seller.
     * @param password The password of the seller.
     * @param admin Indicates whether the seller is an admin.
     */
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
        return this.postList || new DoubleList<Post>();
    }

    /**
     * Sets the list of posts created by the seller.
     * @param postList The list of posts to set.
     */
    public setPostList(postList: DoubleList<Post>): void {
        this.postList = postList;
    }

    public getContactList(): DoubleList<Seller> {
        return this.contactList || new DoubleList<Seller>();
    }

    /**
     * Sets the list of contacts (other sellers) associated with this seller.
     * @param contactList The list of contacts to set.
     */
    public setContactList(contactList: DoubleList<Seller>): void {
        this.contactList = contactList;
    }

    public getChatList(): DoubleList<Chat> {
        return this.chatList || new DoubleList<Chat>();
    }

    /**
     * Sets the list of chats associated with this seller.
     * @param chatList The list of chats to set.
     */
    public getRequestReceivedList(): DoubleList<Request> {
        return this.requestReceivedList || new DoubleList<Request>();
    }

    /**
     * Sets the list of requests received by this seller.
     * @param requestReceivedList The list of requests received to set.
     */
    public setRequestReceivedList(requestReceivedList: DoubleList<Request>): void {
        this.requestReceivedList = requestReceivedList;
    }

    public getRequestSentList(): DoubleList<Request> {
        return this.requestSentList || new DoubleList<Request>();
    }

    /**
     * Sets the list of requests sent by this seller.
     * @param requestSentList The list of requests sent to set.
     */
    public setRequestSentList(requestSentList: DoubleList<Request>): void {
        this.requestSentList = requestSentList;
    }

    /**
     * Checks if the seller is an admin.
     * @returns True if the seller is an admin, false otherwise.
     */
    public isAdmin(): boolean {
        return this.admin;
    }

    /**
     * Sets whether the seller is an admin or not.
     * @param admin True to set the seller as an admin, false otherwise.
     */
    public setAdmin(admin: boolean): void {
        this.admin = admin;
    }

    /**
     * Converts the Seller object to a JSON object.
     * @returns JSON representation of the Seller object.
     */
    public toJSON(): any {
        const personJSON = super.toJSON(); // Serializa las propiedades de Person
    
        return {
            ...personJSON, // Incluye las propiedades de Person en el objeto JSON final
            admin: this.admin,
            postList: this.postList?.toJSON() ?? {},
            contactList: this.contactList?.toJSON() ?? {},
            chatList: this.chatList?.toJSON() ?? {},
            requestReceivedList: this.requestReceivedList?.toJSON() ?? {},
            requestSentList: this.requestSentList?.toJSON() ?? {}
        };
    }
}