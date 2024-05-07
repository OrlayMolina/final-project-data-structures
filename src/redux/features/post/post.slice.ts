import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostsState } from "./post.types";
import { PostState } from '../../../classes.typescript/enum/PostState';
import { DoubleList } from '../../../classes.typescript/own.structures/linked.lists/list/DoubleList';
import { Like } from '../../../classes.typescript/models/Like';
import { Comment } from "../../../classes.typescript/models/Comment";
import { IPost } from "../../../classes.typescript/interfaces/Post.type";

const initialState: PostsState = {
    status: 'idle',
    currentPost: null,
    nameProduct: '',
    description: '',
    price: 0,
    image: '',
    category: '',
    postState: PostState.VOID,
    comments: new DoubleList<Comment>(),
    likes: new DoubleList<Like>()
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setCurrentPost: (state, action: PayloadAction<IPost>) => {
            state.currentPost = action.payload;
        },
        setPost: (state, action: PayloadAction<IPost>) => {
            state.nameProduct = action.payload.nameProduct;
            state.description = action.payload.description;
            state.image = action.payload.image;
            state.category = action.payload.category;
            state.price = action.payload.price;
            state.postState = action.payload.postState;
            state.comments = action.payload.comments;
            state.likes = action.payload.likes;
        },
        addComment: (state, action: PayloadAction<DoubleList<Comment>>) => {
            state.comments = action.payload;
        },
        addLike: (state, action: PayloadAction<DoubleList<Like>>) => {
            state.likes = action.payload;
        }
    }
});

export const { setCurrentPost, setPost, addComment, addLike } = postSlice.actions;

export const selectCurrentPost = (state: { post: PostsState }) => state.post.currentPost;

export default postSlice.reducer;