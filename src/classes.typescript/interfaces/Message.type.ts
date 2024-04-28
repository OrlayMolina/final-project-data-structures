import { Seller } from "../models/Sellers";
export interface IMessage{
    seller: Seller;
    date: Date;
    content: string;
}