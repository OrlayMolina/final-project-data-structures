import { IPost } from './../../../classes.typescript/interfaces/Post.type';
import { Post } from '../../../classes.typescript/models/Post';

export interface PostsState extends IPost {
    status: 'idle' | 'loading' | 'failed';
    currentPost: Post | null
}