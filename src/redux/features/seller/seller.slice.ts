import { Request } from './../../../classes.typescript/models/Request';
import { DoubleList } from './../../../classes.typescript/own.structures/linked.lists/list/DoubleList';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SellerState } from "./seller.types.state";
import { Post } from '../../../classes.typescript/models/Post';
import { Seller } from '../../../classes.typescript/models/Sellers';
import { Chat } from '../../../classes.typescript/models/Chat';

// Define the initial state for the seller slice
const initialState: SellerState = {
    status: 'idle',
    currentSeller: null,
    modalSeller: false,
    totalPosts: 0,
    admin: false,
    postList: new DoubleList(),
    contactList: new DoubleList(),
    chatList: new DoubleList(),
    requestReceivedList: new DoubleList(),
    requestSentList: new DoubleList(),
    name: '',
    lastName: '',
    ID: '',
    address: '',
    userName: '',
    password: ''
}

const sellerSlice = createSlice({
    name: 'seller',
    initialState,
    reducers: {
        setSeller: (state, action: PayloadAction<SellerState>) => {
            state.currentSeller = action.payload;
        },
        setModalSeller: (state, action: PayloadAction<boolean>) => {
            state.modalSeller = action.payload;
        },
        setTotalPosts: (state, action: PayloadAction<number>) => {
            state.totalPosts = action.payload;
        },
        setAdmin: (state, action: PayloadAction<boolean>) => {
            state.admin = action.payload;
        },
        setPostList: (state, action: PayloadAction<DoubleList<Post>>) => {
            state.postList = action.payload;
        },
        addPost: (state, action: PayloadAction<Post>) => {
            const updatedPostList = new DoubleList<Post>();
            if (state.postList) {
                state.postList.forEach(post => updatedPostList.putInFront(post));
            }
            updatedPostList.putInFront(action.payload);
            state.postList = updatedPostList;
        },
        setContactList: (state, action: PayloadAction<DoubleList<Seller>>) => {
            state.contactList = action.payload;
        },
        setChatList: (state, action: PayloadAction<DoubleList<Chat>>) => {
            state.chatList = action.payload;
        },
        setRequestReceivedList: (state, action: PayloadAction<DoubleList<Request>>) => {
            state.requestReceivedList = action.payload;
        }, 
        addRequestReceived: (state, action: PayloadAction<Request>) => {
            const updatedRequestReceivedList = new DoubleList<Request>();
            if(state.requestReceivedList){
                state.requestReceivedList.forEach(request => updatedRequestReceivedList.putInFront(request));
            }
            updatedRequestReceivedList.putInFront(action.payload);
            state.requestReceivedList = updatedRequestReceivedList;
        },
        setRequestSentList: (state, action: PayloadAction<DoubleList<Request>>) => {
            state.requestSentList = action.payload;
        },
        addRequestSent: (state, action: PayloadAction<Request>) => {
            const updatedRequestSentList = new DoubleList<Request>();
            if(state.requestSentList){
                state.requestSentList.forEach(request => updatedRequestSentList.putInFront(request));
            }
            updatedRequestSentList.putInFront(action.payload);
            state.requestSentList = updatedRequestSentList;
        },
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setLastName: (state, action: PayloadAction<string>) => {
            state.lastName = action.payload;
        },
        setID: (state, action: PayloadAction<string>) => {
            state.ID = action.payload;
        },
        setAddress: (state, action: PayloadAction<string>) => {
            state.address = action.payload;
        },
        setUserName: (state, action: PayloadAction<string>) => {
            state.userName = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        resetSeller: (state) => {
            state.currentSeller = null;
            state.modalSeller = false;
            state.totalPosts = 0;
            state.admin = false;
            state.postList = new DoubleList();
            state.contactList = new DoubleList();
            state.chatList = new DoubleList();
            state.requestReceivedList = new DoubleList();
            state.requestSentList = new DoubleList();
            state. name = '',
            state.lastName = '',
            state.ID = '',
            state.address = '',
            state.userName = '',
            state.password = ''
        }
    }
});

export const { 
    setSeller, 
    setModalSeller, 
    setTotalPosts, 
    setAdmin, 
    setPostList, 
    addPost,
    setContactList, 
    setChatList, 
    setRequestReceivedList, 
    addRequestReceived,
    setRequestSentList, 
    addRequestSent,
    setName, 
    setLastName, 
    setID, 
    setAddress, 
    setUserName, 
    setPassword, 
    resetSeller} = sellerSlice.actions;

export const selectSeller = (state: { seller: SellerState} ) => state.seller.currentSeller;
export const selectModalSeller = (state: { seller: SellerState} ) => state.seller.modalSeller;
export const selectPostList = (state: { seller: SellerState} ) => state.seller.postList;
export const selectContactList = (state: {seller: SellerState} ) => state.seller.contactList;
export const selectChatList = (state: { seller: SellerState} ) => state.seller.chatList;
export const selectRequestReceivedList = (state: {seller: SellerState} ) => state.seller.requestReceivedList;
export const selectRequestSentList = (state: { seller: SellerState} ) => state.seller.requestSentList;
export const selectName = (state: { seller: SellerState} ) => state.seller.name;
export const selectLastName = ( state: { seller: SellerState} ) => state.seller.lastName;
export const selectID = (state: { seller: SellerState} ) => state.seller.ID;
export const selectAddress = (state: { seller: SellerState} ) => state.seller.address;
export const selectUserName = (state: { seller: SellerState} ) => state.seller.userName;
export const selectPasseord = (state: { seller: SellerState} ) => state.seller.password;
export const selectTotalPosts = (state: { seller: SellerState} ) => state.seller.totalPosts;
export const selectAdmin = (state: { seller: SellerState} ) => state.seller.admin;

export default sellerSlice.reducer;