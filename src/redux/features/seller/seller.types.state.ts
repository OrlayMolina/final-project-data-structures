import { ISeller } from '../../../classes.typescript/interfaces/Sellers.type';


export interface SellerState extends ISeller{
    status: 'idle' | 'loading' | 'failed';
    currentSeller: ISeller | null;
    modalSeller: boolean;
    totalPosts: number;
}