import { Seller } from "./Sellers";
import { ILike } from "../interfaces/Like.type";

export class Like {
    private seller: Seller;
    private date: Date;

    public constructor({seller, date}:ILike){
        this.seller = seller;
        this.date = date;
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
}