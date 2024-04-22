import { Seller } from "./Sellers";

export class Message {
    private seller: Seller;
    private date: Date;
    private content: string;


    public constructor(seller: Seller, date: Date, content: string){
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