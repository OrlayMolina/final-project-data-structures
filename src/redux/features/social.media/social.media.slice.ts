import { CategoryPost } from './../../../classes.typescript/models/CategoryPost';
import { DoubleList } from './../../../classes.typescript/own.structures/linked.lists/list/DoubleList';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISocialMediaSellersState } from "./social.media.type";
import { Seller } from '../../../classes.typescript/models/Sellers';
import { Post } from '../../../classes.typescript/models/Post';

// Define the initial state for the social media sellers
const initialState: ISocialMediaSellersState = {
    status: 'idle',
    loginErrors: [],
    sellerLogged: null,
    postCategory: null,
    allCategories: [],
    userLogged: false,
    sellerList: new DoubleList<Seller>(),
    postLists: new DoubleList<Post>()
}

const socialMediaSlice = createSlice({
    name: 'socialMedia',
    initialState,
    reducers: {
        setStatus: (state, action: PayloadAction<'idle' | 'loading' | 'failed'> ) => {
            state.status = action.payload;
        },
        setLoginErrors: (state, action: PayloadAction<string[]>) => {
            state.loginErrors = action.payload;
        },
        setSellerLogged: (state, action: PayloadAction<Seller | null>) => {
            state.sellerLogged = action.payload;
        },
        // setSecretKey: (state, action: PayloadAction<string>) => {
        //     state.secretKey = action.payload;
        // },
        setUserLogged: (state, action: PayloadAction<boolean>) => {
            state.userLogged = action.payload;
        },
        setPostCategory: (state, action: PayloadAction<CategoryPost | null>) => {
            state.postCategory = action.payload;
        },
        setAllCategories: (state, action: PayloadAction<CategoryPost[]>) => {
            state.allCategories = action.payload;
        },
        setSellerList: (state, action: PayloadAction<DoubleList<Seller>>) => {
            state.sellerList = action.payload;
        },
        setPostList: (state, action: PayloadAction<DoubleList<Post>>) => {
            state.postLists = action.payload;
        },
        addPosts: (state, action: PayloadAction<Post>) => {
            const updatedPostList = new DoubleList<Post>();
            if(state.postLists){
                state.postLists.forEach(post => updatedPostList.putInFront(post));
            }
            updatedPostList.putInFront(action.payload);
            state.postLists = updatedPostList;
        }
    }
});

export const { 
    setStatus,
    setLoginErrors,
    setSellerLogged,
    setUserLogged,
    setPostCategory,
    setAllCategories,
    setSellerList,
    setPostList,
    addPosts
 } = socialMediaSlice.actions;

export const selectStatus = (state: { socialMedia: ISocialMediaSellersState }) => state.socialMedia.status;
export const selectLoginErrors = (state: { socialMedia: ISocialMediaSellersState }) => state.socialMedia.loginErrors;
export const selectSellerLogged = (state: { socialMedia: ISocialMediaSellersState }) => state.socialMedia.sellerLogged;
export const selectUserLogged = (state: { socialMedia: ISocialMediaSellersState }) => state.socialMedia.userLogged;
export const selectPostCategory =(state: { socialMedia: ISocialMediaSellersState }) => state.socialMedia.postCategory;
export const selectAllCategories = (state: { socialMedia: ISocialMediaSellersState }) => state.socialMedia.allCategories;
export const selectSellerList = (state: { socialMedia: ISocialMediaSellersState }) => state.socialMedia.sellerList;
export const selectPostLists = (state: { socialMedia: ISocialMediaSellersState }) => state.socialMedia.postLists;

export default socialMediaSlice.reducer;