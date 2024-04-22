import { Seller } from './Sellers';
export class Comment {
    
    private seller: Seller;
    private comment: string;
    private date: Date;

    public constructor(seller: Seller, comment: string, date: Date){
        this.seller = seller;
        this.comment = comment;
        this.date = date;
    }

    public getSeller(): Seller {
        return this.seller;
    }

    public setSeller(seller: Seller): void {
        this.seller = seller;
    }

    public getComment(): string {
        return this.comment;
    }

    public setComment(comment: string): void {
        this.comment = comment;
    }

    public getDate(): Date {
        return this.date;
    }

    public setDate(date: Date): void {
        this.date = date;
    }
}