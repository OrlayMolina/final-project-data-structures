import { PostState } from './../enum/PostState';
import { Category } from "../enum/Category";
import { Like } from "./Like";
import { DoubleList } from "../own.structures/linked.lists/list/DoubleList";

export class Post {

    private nameProduct: string;
    private description: string;
    private image: string;
    private category: Category;
    private price: number;
    private postState: PostState;
    private comments: DoubleList<Comment>;
    private likes: DoubleList<Like>;

    public constructor(nameProduct: string, description: string, image: string, 
        category: Category, price: number, PostState: PostState, comments: DoubleList<Comment>,
        likes: DoubleList<Like>){
            this.nameProduct = nameProduct;
            this.description = description;
            this.image = image;
            this.category = category;
            this.price = price;
            this.postState = PostState;
            this.comments = comments;
            this.likes = likes;
    }

    public getNameProduct(): string {
        return this.nameProduct;
    }

    public setNameProduct(nameProduct: string): void {
        this.nameProduct = nameProduct;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public getImage(): string {
        return this.image;
    }

    public setImage(image: string): void {
        this.image = image;
    }

    public getCategory(): Category {
        return this.category;
    }

    public setCategory(category: Category): void {
        this.category = category;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public getPostState(): PostState {
        return this.postState;
    }

    public setPostState(postState: PostState): void {
        this.postState = postState;
    }

    public getComments(): DoubleList<Comment> {
        return this.comments;
    }

    public setComments(comments: DoubleList<Comment>): void {
        this.comments = comments;
    }

    public getLikes(): DoubleList<Like> {
        return this.likes;
    }

    public setLikes(likes: DoubleList<Like>): void {
        this.likes = likes;
    }
}