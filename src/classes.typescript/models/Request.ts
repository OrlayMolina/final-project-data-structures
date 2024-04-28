import { Seller } from "./Sellers";
import { IRequest } from "../interfaces/Request.type";

export class Request {

    private seller: Seller;
    private date: Date;
    private accept: boolean;

    public constructor({seller, date, accept}:IRequest) {
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