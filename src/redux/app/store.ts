import { configureStore } from '@reduxjs/toolkit';
import sellerReducer from '../features/seller/seller.slice';
import postReducer from '../features/post/post.slice';
import socialMediaReducer from '../features/social.media/social.media.slice';

export const store = configureStore({
    reducer: {
        seller: sellerReducer,
        post: postReducer,
        socialMedia: socialMediaReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export default store