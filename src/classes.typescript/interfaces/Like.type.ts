import { Seller } from "../models/Sellers";

/**
 * Defines an interface representing a like made by a seller.
 */
export interface ILike{
    seller: Seller;
    date: Date;
}