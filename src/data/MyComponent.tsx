import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Comment } from '../classes.typescript/models/Comment';
import { Category } from "../classes.typescript/enum/Category";
import { PostState } from '../classes.typescript/enum/PostState';
import { Post } from '../classes.typescript/models/Post';
import { setCurrentPost } from "../redux/features/post/post.slice";
import { DoubleList } from "../classes.typescript/own.structures/linked.lists/list/DoubleList";
import { Like } from "../classes.typescript/models/Like";

export default function MyComponent(): JSX.Element {
    const dispatch = useDispatch();

    useEffect(() => {
        const post: Post = new Post({
            nameProduct: 'Biclycle',
            description: 'This is a Biclyce',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiMjpjrtY1a1Uo0wwhLSdAuri57pZuJxvU1U9MeXDG-g&s',
            category: Category.SPORT,
            price: 950000,
            postState: PostState.PUBLISHED, // Replace 'postState' with 'PostState'
            comments: new DoubleList<Comment>(),
            likes: new DoubleList<Like>()
        });
        const postPayload = post.toJSON(); 

        dispatch(setCurrentPost(postPayload));
    }, [dispatch]);

    return (
        <div>
            {/* Your component JSX here */}
        </div>
    );
}
