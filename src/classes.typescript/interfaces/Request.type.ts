import { Seller } from "../models/Sellers";
/**
 * Defines an interface representing a request made to a seller.
 */

export interface IRequest{
    seller: Seller;
    date: Date;
    accept: boolean;
}