import { DoubleList } from './../../../classes.typescript/own.structures/linked.lists/list/DoubleList';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISocialMediaSellersState } from "./social.media.type";
import { Seller } from '../../../classes.typescript/models/Sellers';
import { Post } from '../../../classes.typescript/models/Post';

const initialState: ISocialMediaSellersState = {
    status: 'idle',
    userLogged: false,
    sellerList: new DoubleList<Seller>(),
    postList: new DoubleList<Post>()
}

const socialMediaSlice = createSlice({
    name: 'socialMedia',
    initialState,
    reducers: {
        setStatus: (state, action: PayloadAction<'idle' | 'loading' | 'failed'> ) => {
            state.status = action.payload;
        },
        setUserLogged: (state, action: PayloadAction<boolean>) => {
            state.userLogged = action.payload;
        },
        setSellerList: (state, action: PayloadAction<DoubleList<Seller>>) => {
            state.sellerList = action.payload;
        },
        setPostList: (state, action: PayloadAction<DoubleList<Post>>) => {
            state.postList = action.payload;
        }
    }
});

export const { setStatus } = socialMediaSlice.actions;

export const selectStatus = (state: { socialMedia: ISocialMediaSellersState }) => state.socialMedia.status;
export const selectUserLogged = (state: { socialMedia: ISocialMediaSellersState }) => state.socialMedia.userLogged;
export const selectSellerList = (state: { socialMedia: ISocialMediaSellersState }) => state.socialMedia.sellerList;
export const selectPostList = (state: { socialMedia: ISocialMediaSellersState }) => state.socialMedia.postList;

export default socialMediaSlice.reducer;