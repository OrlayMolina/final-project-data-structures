import { ISeller } from '../../../classes.typescript/interfaces/Sellers.type';

// Define the interface for the seller state
export interface SellerState extends ISeller{
    status: 'idle' | 'loading' | 'failed';
    currentSeller: ISeller | null;
    modalSeller: boolean;
    totalPosts: number;
}