import { configureStore } from '@reduxjs/toolkit';
import sellerReducer from '../features/seller/seller.slice';
import postReducer from '../features/post/post.slice';
import socialMediaReducer from '../features/social.media/social.media.slice';
import authReducer from '../features/auth/auth.slice';

/**
 * Redux store configuration.
 * It combines multiple reducers to form the store.
 */
export const store = configureStore({
    reducer: {
        seller: sellerReducer,
        post: postReducer,
        socialMedia: socialMediaReducer,
        auth: authReducer
    }
});

/**
 * Type representing the root state of the Redux store.
 */
export type RootState = ReturnType<typeof store.getState>
export default store