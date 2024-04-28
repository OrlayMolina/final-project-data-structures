import { Seller } from "../models/Sellers";

export interface IComment{
     seller: Seller;
     comment: string;
     date: Date;

}