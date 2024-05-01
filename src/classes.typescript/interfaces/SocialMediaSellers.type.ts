import { Seller } from "../models/Sellers"
import { Post } from "../models/Post"
import { DoubleList } from "../own.structures/linked.lists/list/DoubleList"
/**
 * Defines an interface representing a collection of sellers on a social media platform.
 */
export interface ISocialMediaSellers{
    sellerList: DoubleList<Seller>,
    postList: DoubleList<Post>,
    userLogged: boolean
}