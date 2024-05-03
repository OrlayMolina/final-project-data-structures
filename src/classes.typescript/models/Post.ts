import { PostState } from './../enum/PostState';
import { Like } from "./Like";
import { Comment } from './Comment';
import { DoubleList } from "../own.structures/linked.lists/list/DoubleList";
import { IPost } from '../interfaces/Post.type';

/**
 * Represents a post for a product.
 */
export class Post {

    nameProduct: string;
    description: string;
    image: string;
    category: string;
    price: number;
    postState: PostState;
    comments: DoubleList<Comment>;
    likes: DoubleList<Like>;

    
    /**
 * Creates an instance of the Post class.
 * @param {IPost} param0 Object containing properties of the post, including nameProduct, description, image, 
 * category, price, PostState, comments, and likes.
 */
public constructor({nameProduct, description, image, 
        category, price, postState, comments,
        likes}: IPost){
            this.nameProduct = nameProduct;
            this.description = description;
            this.image = image;
            this.category = category;
            this.price = price;
            this.postState = postState;
            this.comments = comments;
            this.likes = likes;
    }

    /**
     * Converts the Post object to a JSON object.
     * @returns JSON representation of the Post object.
     */
    public toJSON(): any {
        return {
            nameProduct: this.nameProduct,
            description: this.description,
            image: this.image,
            category: this.category,
            price: this.price,
            postState: this.postState,
            comments: this.comments.toJSON(), // Assuming toJSON() method is implemented in DoubleList
            likes: this.likes.toJSON(), // Assuming toJSON() method is implemented in DoubleList
        };
    }
    /**
     * Returns the name of the product.
     * @returns The name of the product.
     */
    public getNameProduct(): string {
        return this.nameProduct;
    }
    
    /**
     * Sets the name of the product.
     * @param nameProduct The new name of the product.
     */
    public setNameProduct(nameProduct: string): void {
        this.nameProduct = nameProduct;
    }
    
    /**
     * Returns the description of the product.
     * @returns The description of the product.
     */
    public getDescription(): string {
        return this.description;
    }
    
    /**
     * Sets the description of the product.
     * @param description The new description of the product.
     */
    public setDescription(description: string): void {
        this.description = description;
    }
    
    /**
     * Returns the image URL of the product.
     * @returns The image URL of the product.
     */
    public getImage(): string {
        return this.image;
    }
    
    /**
     * Sets the image URL of the product.
     * @param image The new image URL of the product.
     */
    public setImage(image: string): void {
        this.image = image;
    }
    
    /**
     * Returns the category of the product.
     * @returns The category of the product.
     */
    public getCategory(): string {
        return this.category;
    }
    
    /**
     * Sets the category of the product.
     * @param category The new category of the product.
     */
    public setCategory(category: string): void {
        this.category = category;
    }
    
    /**
     * Returns the price of the product.
     * @returns The price of the product.
     */
    public getPrice(): number {
        return this.price;
    }
    
    /**
     * Sets the price of the product.
     * @param price The new price of the product.
     */
    public setPrice(price: number): void {
        this.price = price;
    }
    
    /**
     * Returns the post state of the product.
     * @returns The post state of the product.
     */
    public getPostState(): PostState {
        return this.postState;
    }
    
    /**
     * Sets the post state of the product.
     * @param postState The new post state of the product.
     */
    public setPostState(postState: PostState): void {
        this.postState = postState;
    }
    
    /**
     * Returns the list of comments on the product post.
     * @returns The list of comments on the product post.
     */
    public getComments(): DoubleList<Comment> {
        return this.comments;
    }
    
    /**
     * Sets the list of comments on the product post.
     * @param comments The new list of comments on the product post.
     */
    public setComments(comments: DoubleList<Comment>): void {
        this.comments = comments;
    }
    
    /**
     * Returns the list of likes on the product post.
     * @returns The list of likes on the product post.
     */
    public getLikes(): DoubleList<Like> {
        return this.likes;
    }
    
    
    /**
     * Sets the list of likes on the product post.
     * @param likes The new list of likes on the product post.
     */
    public setLikes(likes: DoubleList<Like>): void {
        this.likes = likes;
    }
}