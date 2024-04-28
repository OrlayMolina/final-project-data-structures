import { Seller } from "../models/Sellers";
/**
 * Defines an interface representing a message sent by a seller.
 */
export interface IMessage{
    seller: Seller;
    date: Date;
    content: string;
}