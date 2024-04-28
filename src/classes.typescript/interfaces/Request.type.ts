import { Seller } from "../models/Sellers";

export interface IRequest{
    seller: Seller;
    date: Date;
    accept: boolean;
}