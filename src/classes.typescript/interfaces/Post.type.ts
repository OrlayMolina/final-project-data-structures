import { Category } from "../enum/Category";
import { PostState } from "../enum/PostState";
import { DoubleList } from "../own.structures/linked.lists/list/DoubleList";
import { Like } from "../models/Like";


export interface IPost {
    nameProduct: string;
    description: string;
    image: string;
    category: Category;
    price: number;
    PostState: PostState;
    comments: DoubleList<Comment>;
    likes: DoubleList<Like>;
}