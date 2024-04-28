import { Seller } from './Sellers';
import { IComment } from '../interfaces/Comment.type';

/**
 * Represents a comment made by a seller.
 */

export class Comment {
    
    private seller: Seller;
    private comment: string;
    private date: Date;

    /**
     * Creates an instance of Comment.
     * @param {IComment}  Object containing seller, comment, and date properties.
     */

    public constructor({seller, comment, date}:IComment) {
        this.seller = seller;
        this.comment = comment;
        this.date = date;
    }

   /**
     * Sets the seller who made the comment.
     * @param {Seller} seller The seller who made the comment.
     */
    public getSeller(): Seller {
        return this.seller;
    }

     /**
     * Retrieves the seller who made the comment.
     * @returns The seller who made the comment.
     */
    public setSeller(seller: Seller): void {
        this.seller = seller;
    }

    /**
     * Retrieves the content of the comment.
     * @returns The content of the comment.
     */
    public getComment(): string {
        return this.comment;
    }

     /**
     * Sets the content of the comment.
     * @param {string} comment The content of the comment.
     */
    public setComment(comment: string): void {
        this.comment = comment;
    }

     /**
     * Retrieves the date when the comment was made.
     * @returns The date when the comment was made.
     */
    public getDate(): Date {
        return this.date;
    }

    /**
     * Sets the date when the comment was made.
     * @param {Date} date The date when the comment was made.
     */
    public setDate(date: Date): void {
        this.date = date;
    }
}