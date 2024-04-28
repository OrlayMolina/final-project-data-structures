import { Seller } from "./Sellers";
import { IMessage } from "../interfaces/Message.type";
export class Message {
    private seller: Seller;
    private date: Date;
    private content: string;


    public constructor({seller, date, content}:IMessage){
        this.seller = seller;
        this.date = date;
        this.content = content;
    }

    public getSeller(): Seller {
        return this.seller;
    }

    public setSeller(seller: Seller): void {
        this.seller = seller;
    }

    public getDate(): Date {
        return this.date;
    }

    public setDate(date: Date): void {
        this.date = date;
    }

    public getContent(): string {
        return this.content;
    }

    public setContent(content: string): void {
        this.content = content;
    }
}