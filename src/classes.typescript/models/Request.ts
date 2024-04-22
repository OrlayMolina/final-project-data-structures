import { Seller } from "./Sellers";

export class Request {

    private seller: Seller;
    private date: Date;
    private accept: boolean;

    public constructor(seller: Seller, date: Date, accept: boolean){
        this.seller = seller;
        this.date = date;
        this.accept = accept;
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

    public isAccepted(): boolean {
        return this.accept;
    }

    public setAccepted(accept: boolean): void {
        this.accept = accept;
    }
}