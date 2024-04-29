import { configureStore } from '@reduxjs/toolkit';
import sellerReducer from '../features/seller/seller.slice';
import postReducer from '../features/post/post.slice';

export const store = configureStore({
    reducer: {
        seller: sellerReducer,
        post: postReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export default store