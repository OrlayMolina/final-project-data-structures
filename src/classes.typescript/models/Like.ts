import { Seller } from "./Sellers";
import { ILike } from "../interfaces/Like.type";
/**
 * Represents a like made by a seller.
 */
export class Like {
    private seller: Seller;
    private date: Date;

     /**
     * Creates an instance of Like.
     * @param {ILike} param0 Object containing seller and date properties.
     */
    public constructor({seller, date}:ILike){
        this.seller = seller;
        this.date = date;
    }

    /**
     * Retrieves the seller who made the like.
     * @returns The seller who made the like.
     */
    public getSeller(): Seller {
        return this.seller;
    }

    /**
     * Sets the seller who made the like.
     * @param {Seller} seller The seller who made the like.
     */
    public setSeller(seller: Seller): void {
        this.seller = seller;
    }

    /**
     * Retrieves the date when the like was made.
     * @returns The date when the like was made.
     */
    public getDate(): Date {
        return this.date;
    }

    /**
     * Sets the date when the like was made.
     * @param {Date} date The date when the like was made.
     */
    public setDate(date: Date): void {
        this.date = date;
    }
}