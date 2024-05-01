import { DoubleList } from "../own.structures/linked.lists/list/DoubleList";
import { Seller } from "./Sellers";
import { Post } from "./Post";
export class SocialMediaSellers{

    private sellerList: DoubleList<Seller>
    private postList: DoubleList<Post>
    private userLogged: boolean;

    public constructor(){
        this.sellerList = new DoubleList<Seller>();
        this.postList = new DoubleList<Post>();
        this.userLogged = false;
    }


    public getSellerList(): DoubleList<Seller> {
        return this.sellerList;
    }

    public setSellerList( sellerList: DoubleList<Seller>): void {
        this.sellerList = sellerList;
    }

    public getPostList(): DoubleList<Post> {
        return this.postList;
    }

    public setPostList( postList: DoubleList<Post> ): void {
        this.postList = postList;
    }

    public getUserLogged(): boolean {
        return this.userLogged;
    }

    public setUserLogged( userLogged: boolean): void {
        this.userLogged = userLogged;
    }

}