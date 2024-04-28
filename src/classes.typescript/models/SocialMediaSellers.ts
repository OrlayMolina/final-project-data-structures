// import { DoubleList } from "../own.structures/linked.lists/list/DoubleList";
// import { User } from "./User";

import { DoubleList } from "../own.structures/linked.lists/list/DoubleList";
import { Seller } from "./Sellers";

// export class SocialMediaSellers {

//     private postList: DoubleList<User> = new DoubleList();
// }

export class SocialMediaSellers{
    private sellerList:DoubleList<Seller>

    public constructor(){
        this.sellerList = new DoubleList();
    }


    public getSellerList(): DoubleList<Seller> {
        return this.sellerList;
    }

    public setSellerList( sellerList: DoubleList<Seller>): void {
        this.sellerList = sellerList;
    }

}