import { IPost } from './../../../classes.typescript/interfaces/Post.type';

export interface PostsState extends IPost {
    status: 'idle' | 'loading' | 'failed';
    currentPost: IPost | null
}