import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/user.slice';
import sellerReducer from '../features/seller/seller.slice';
import postReducer from '../features/post/post.slice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        seller: sellerReducer,
        post: postReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export default store