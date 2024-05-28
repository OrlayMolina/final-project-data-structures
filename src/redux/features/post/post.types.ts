import { IPost } from './../../../classes.typescript/interfaces/Post.type';

// Define the shape of the posts slice state
export interface PostsState extends IPost {
    status: 'idle' | 'loading' | 'failed';
    currentPost: IPost | null
    modalComments: boolean;
}