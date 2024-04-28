import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/user.slice';
import sellerReducer from '../features/seller/seller.slice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        seller: sellerReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export default store