import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Comment } from '../classes.typescript/models/Comment';
import { Category } from "../classes.typescript/enum/Category";
import { PostState } from '../classes.typescript/enum/PostState';
import { Post } from '../classes.typescript/models/Post';
import { Seller } from '../classes.typescript/models/Sellers';
import { Chat } from '../classes.typescript/models/Chat';
import { Request } from '../classes.typescript/models/Request';
import { setSellerList } from '../redux/features/social.media/social.media.slice';
import { setCurrentPost } from "../redux/features/post/post.slice";
import { setPostList } from '../redux/features/social.media/social.media.slice';
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
            price: 395,
            postState: PostState.PUBLISHED, // Replace 'postState' with 'PostState'
            comments: new DoubleList<Comment>(),
            likes: new DoubleList<Like>()
        });
        const postPayload = post.toJSON(); 

        dispatch(setCurrentPost(postPayload));
    }, [dispatch]);

    useEffect(() => {
        const post1: Post = new Post({
            nameProduct: 'Bicycle',
            description: 'This is Bicycle',
            image: 'bicicleta',
            category: Category.SPORT,
            price: 145,
            postState: PostState.PUBLISHED,
            comments: new DoubleList<Comment>(),
            likes: new DoubleList<Like>()
        });

        const post2: Post = new Post({
            nameProduct: 'Computer',
            description: 'This is Computer',
            image: 'computador',
            category: Category.TECNOLOGY,
            price: 278,
            postState: PostState.PUBLISHED,
            comments: new DoubleList<Comment>(),
            likes: new DoubleList<Like>()
        });

        const post3: Post = new Post({
            nameProduct: 'JBL Speaker',
            description: 'This is a JBL Speaker',
            image: 'jbl',
            category: Category.TECNOLOGY,
            price: 96,
            postState: PostState.PUBLISHED,
            comments: new DoubleList<Comment>(),
            likes: new DoubleList<Like>()
        });

        const post4: Post = new Post({
            nameProduct: 'Ducati',
            description: 'This is a Ducati',
            image: 'ducati',
            category: Category.TECNOLOGY,
            price: 3500,
            postState: PostState.PUBLISHED,
            comments: new DoubleList<Comment>(),
            likes: new DoubleList<Like>()
        });

        const post5: Post = new Post({
            nameProduct: 'IPad',
            description: 'This is an IPad',
            image: 'ipad',
            category: Category.TECNOLOGY,
            price: 1500,
            postState: PostState.PUBLISHED,
            comments: new DoubleList<Comment>(),
            likes: new DoubleList<Like>()
        });

        const post6: Post = new Post({
            nameProduct: 'Bed',
            description: 'This is a Bed',
            image: 'cama',
            category: Category.HOME,
            price: 180,
            postState: PostState.PUBLISHED,
            comments: new DoubleList<Comment>(),
            likes: new DoubleList<Like>()
        });

        const postList: DoubleList<Post> = new DoubleList<Post>();
        postList.putInFront(post1);
        postList.putInFront(post2);
        postList.putInFront(post3);
        postList.putInFront(post4);
        postList.putInFront(post5);
        postList.putInFront(post6);

        const postListPayload = postList.toJSON();

        dispatch(setPostList(postListPayload));
    }, [dispatch]);

    useEffect( () => {
        const seller: Seller = new Seller({
            name: 'John',
            lastName: 'Doe',
            ID: '123456789',
            address: '1234 Main St',
            userName: 'johndoe',
            password: '1234',
            admin: true,
            postList: new DoubleList<Post>(),
            contactList: new DoubleList<Seller>(),
            chatList: new DoubleList<Chat>(),
            requestReceivedList: new DoubleList<Request>(),
            requestSentList: new DoubleList<Request>()
            
        });

        const sellerList: DoubleList<Seller> = new DoubleList<Seller>();
        sellerList.putInFront(seller);
        const sellerListPayload = sellerList.toJSON();
        dispatch(setSellerList(sellerListPayload));

    }, [dispatch])

    return (
        <div>
            {/* Your component JSX here */}
        </div>
    );
}
