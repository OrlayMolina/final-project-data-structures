import { Seller } from '../../../classes.typescript/models/Sellers';
import { ISocialMediaSellers } from './../../../classes.typescript/interfaces/SocialMediaSellers.type';
import { CategoryPost } from '../../../classes.typescript/models/CategoryPost';

// Define the interface for the social media sellers state
export interface ISocialMediaSellersState extends ISocialMediaSellers{
    status: 'idle' | 'loading' | 'failed';
    loginErrors: string[];
    sellerLogged: Seller | null;
    postCategory: CategoryPost | null;
    allCategories: CategoryPost[];
}
