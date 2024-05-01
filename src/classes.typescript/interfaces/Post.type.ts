import { Category } from "../enum/Category";
import { PostState } from "../enum/PostState";
import { DoubleList } from "../own.structures/linked.lists/list/DoubleList";
import { Like } from "../models/Like";
import { Comment } from "../models/Comment";
/**
 * Defines an interface representing a post for a product.
 */
export interface IPost {
    nameProduct: string;
    description: string;
    image: string;
    category: Category;
    price: number;
    postState: PostState;
    comments: DoubleList<Comment>;
    likes: DoubleList<Like>;
}