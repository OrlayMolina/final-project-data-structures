import { Seller } from "./Sellers";
import { IMessage } from "../interfaces/Message.type";
/**
 * Represents a message sent by a seller.
 */

export class Message {
    private seller: Seller;
    private date: Date;
    private content: string;

    /**
     * Creates an instance of Message.
     * @param {IMessage} param0 Object containing seller, date, and content properties.
     */
    public constructor({seller, date, content}: IMessage) {
        this.seller = seller;
        this.date = date;
        this.content = content;
    }

    /**
     * Retrieves the seller who sent the message.
     * @returns The seller who sent the message.
     */
    public getSeller(): Seller {
        return this.seller;
    }

    /**
     * Sets the seller who sent the message.
     * @param {Seller} seller The seller who sent the message.
     */
    public setSeller(seller: Seller): void {
        this.seller = seller;
    }

    /**
     * Retrieves the date when the message was sent.
     * @returns The date when the message was sent.
     */
    public getDate(): Date {
        return this.date;
    }

    /**
     * Sets the date when the message was sent.
     * @param {Date} date The date when the message was sent.
     */
    public setDate(date: Date): void {
        this.date = date;
    }

    /**
     * Retrieves the content of the message.
     * @returns The content of the message.
     */
    public getContent(): string {
        return this.content;
    }

    /**
     * Sets the content of the message.
     * @param {string} content The content of the message.
     */
    public setContent(content: string): void {
        this.content = content;
    }
}