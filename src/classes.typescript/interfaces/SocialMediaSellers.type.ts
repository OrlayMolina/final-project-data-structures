import { Seller } from "../models/Sellers"
import { DoubleList } from "../own.structures/linked.lists/list/DoubleList"
/**
 * Defines an interface representing a collection of sellers on a social media platform.
 */
export interface IsocialMediaSellers{
    sellerList:DoubleList<Seller>
}