import { Seller } from "../models/Sellers";
/**
 * Defines a comment interface representing a comment made by a seller.
 */
export interface IComment{
     seller: Seller;
     comment: string;
     date: Date;

}