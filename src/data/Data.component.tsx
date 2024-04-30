import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Comment } from '../classes.typescript/models/Comment';
import { Category } from "../classes.typescript/enum/Category";
import { PostState } from '../classes.typescript/enum/PostState';
import { Post } from '../classes.typescript/models/Post';
import { setCurrentPost } from "../redux/features/post/post.slice";
import { DoubleList } from "../classes.typescript/own.structures/linked.lists/list/DoubleList";
import { Like } from "../classes.typescript/models/Like";

export default function Data(): JSX.Element {
    const dispatch = useDispatch();

    useEffect(() => {
        const post: Post = new Post({
            nameProduct: 'Biclycle',
            description: 'This is a Biclyce',
            image: 'bicicleta',
            category: Category.SPORT,
            price: 3950000,
            postState: PostState.PUBLISHED, // Replace 'postState' with 'PostState'
            comments: new DoubleList<Comment>(),
            likes: new DoubleList<Like>()
        });
        const postPayload = post.toJSON(); 

        dispatch(setCurrentPost(postPayload));
    }, [dispatch]);

    useEffect(() => {
        const post1: Post = new Post({
            nameProduct: 'Bicycle 1',
            description: 'This is Bicycle 1',
            image: 'bicicleta1',
            category: Category.SPORT,
            price: 3950000,
            postState: PostState.PUBLISHED,
            comments: new DoubleList<Comment>(),
            likes: new DoubleList<Like>()
        });

        const post2: Post = new Post({
            nameProduct: 'Bicycle 2',
            description: 'This is Bicycle 2',
            image: 'bicicleta2',
            category: Category.SPORT,
            price: 3950000,
            postState: PostState.PUBLISHED,
            comments: new DoubleList<Comment>(),
            likes: new DoubleList<Like>()
        });

        const postList: DoubleList<Post> = new DoubleList<Post>();
    }, []);

    return (
        <div>
            {/* Your component JSX here */}
        </div>
    );
}
