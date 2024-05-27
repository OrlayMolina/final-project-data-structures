import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Comment } from '../classes.typescript/models/Comment';
import { PostState } from '../classes.typescript/enum/PostState';
import { CategoryPost } from '../classes.typescript/models/CategoryPost';
import { Post } from '../classes.typescript/models/Post';
import { Seller } from '../classes.typescript/models/Sellers';
import { Chat } from '../classes.typescript/models/Chat';
import { Request } from '../classes.typescript/models/Request';
import { setSellerList, setAllCategories } from '../redux/features/social.media/social.media.slice';
import { setPostList } from '../redux/features/social.media/social.media.slice';
import { DoubleList } from "../classes.typescript/own.structures/linked.lists/list/DoubleList";
import { Like } from "../classes.typescript/models/Like";


/**
 * Functional component that initializes and loads data into the application.
 * This component utilizes the useEffect hook to execute logic once the component has mounted.
 * It creates and loads instances of categories, posts, and sellers into the application state using Redux dispatch.
 * @returns {JSX.Element} The Data component.
 */
export default function Data(): JSX.Element {
    const dispatch = useDispatch();
    useEffect( () => {
        const category1: CategoryPost = new CategoryPost(1, 'APPLIANCES');
        const category2: CategoryPost = new CategoryPost(1, 'BOOKS');
        const category3: CategoryPost = new CategoryPost(2, 'HOME');
        const category4: CategoryPost = new CategoryPost(3, 'TECHNOLOGY');
        const category5: CategoryPost = new CategoryPost(4, 'SPORT');

        const categoryList: CategoryPost[] = [category1, category2, category3, category4, category5];
        dispatch(setAllCategories(categoryList));
    }, [dispatch]);

    useEffect(() => {
        const post1: Post = new Post({
            nameProduct: 'Bicycle',
            description: 'This is Bicycle',
            image: 'bicicleta',
            category: 'SPORT',
            price: 145,
            postState: PostState.PUBLISHED,
            comments: new DoubleList<Comment>(),
            likes: new DoubleList<Like>()
        });

        const post2: Post = new Post({
            nameProduct: 'Computer',
            description: 'This is Computer',
            image: 'computador',
            category: 'TECHNOLOGY',
            price: 278,
            postState: PostState.PUBLISHED,
            comments: new DoubleList<Comment>(),
            likes: new DoubleList<Like>()
        });

        const post3: Post = new Post({
            nameProduct: 'JBL Speaker',
            description: 'This is a JBL Speaker',
            image: 'jbl',
            category: 'TECHNOLOGY',
            price: 96,
            postState: PostState.PUBLISHED,
            comments: new DoubleList<Comment>(),
            likes: new DoubleList<Like>()
        });

        const post4: Post = new Post({
            nameProduct: 'Ducati',
            description: 'This is a Ducati',
            image: 'ducati',
            category: 'TECHNOLOGY',
            price: 3500,
            postState: PostState.PUBLISHED,
            comments: new DoubleList<Comment>(),
            likes: new DoubleList<Like>()
        });

        const post5: Post = new Post({
            nameProduct: 'IPad',
            description: 'This is an IPad',
            image: 'ipad',
            category: 'TECHNOLOGY',
            price: 1500,
            postState: PostState.PUBLISHED,
            comments: new DoubleList<Comment>(),
            likes: new DoubleList<Like>()
        });

        const post6: Post = new Post({
            nameProduct: 'Bed',
            description: 'This is a Bed',
            image: 'cama',
            category: 'HOME',
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
        const seller1: Seller = new Seller({
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
        const seller2: Seller = new Seller({
            name: 'Alice',
            lastName: 'Smith',
            ID: '987654321',
            address: '5678 Elm St',
            userName: 'alicesmith',
            password: '5678',
            admin: false,
            postList: new DoubleList<Post>(),
            contactList: new DoubleList<Seller>(),
            chatList: new DoubleList<Chat>(),
            requestReceivedList: new DoubleList<Request>(),
            requestSentList: new DoubleList<Request>()
        });
        
        const seller3: Seller = new Seller({
            name: 'Bob',
            lastName: 'Johnson',
            ID: '456789123',
            address: '9101 Oak Ave',
            userName: 'bobjohnson',
            password: '9101',
            admin: false,
            postList: new DoubleList<Post>(),
            contactList: new DoubleList<Seller>(),
            chatList: new DoubleList<Chat>(),
            requestReceivedList: new DoubleList<Request>(),
            requestSentList: new DoubleList<Request>()
        });
        
        const seller4: Seller = new Seller({
            name: 'Emma',
            lastName: 'Brown',
            ID: '789123456',
            address: '1122 Pine St',
            userName: 'emmabrown',
            password: '1122',
            admin: false,
            postList: new DoubleList<Post>(),
            contactList: new DoubleList<Seller>(),
            chatList: new DoubleList<Chat>(),
            requestReceivedList: new DoubleList<Request>(),
            requestSentList: new DoubleList<Request>()
        });
        
        const seller5: Seller = new Seller({
            name: 'Michael',
            lastName: 'Wilson',
            ID: '654321987',
            address: '3344 Maple Ave',
            userName: 'michaelwilson',
            password: '3344',
            admin: false,
            postList: new DoubleList<Post>(),
            contactList: new DoubleList<Seller>(),
            chatList: new DoubleList<Chat>(),
            requestReceivedList: new DoubleList<Request>(),
            requestSentList: new DoubleList<Request>()
        });
        
        const seller6: Seller = new Seller({
            name: 'Sophia',
            lastName: 'Taylor',
            ID: '321987654',
            address: '5566 Walnut St',
            userName: 'sophiataylor',
            password: '5566',
            admin: false,
            postList: new DoubleList<Post>(),
            contactList: new DoubleList<Seller>(),
            chatList: new DoubleList<Chat>(),
            requestReceivedList: new DoubleList<Request>(),
            requestSentList: new DoubleList<Request>()
        });
        
        const seller7: Seller = new Seller({
            name: 'James',
            lastName: 'Anderson',
            ID: '567890123',
            address: '7788 Cedar St',
            userName: 'jamesanderson',
            password: '7788',
            admin: false,
            postList: new DoubleList<Post>(),
            contactList: new DoubleList<Seller>(),
            chatList: new DoubleList<Chat>(),
            requestReceivedList: new DoubleList<Request>(),
            requestSentList: new DoubleList<Request>()
        });



        const sellerList: DoubleList<Seller> = new DoubleList<Seller>();
        sellerList.putInFront(seller1);
        sellerList.putInFront(seller2);
        sellerList.putInFront(seller3);
        sellerList.putInFront(seller4);
        sellerList.putInFront(seller5);
        sellerList.putInFront(seller6);
        sellerList.putInFront(seller7);
        const sellerListPayload = sellerList.toJSON();
        dispatch(setSellerList(sellerListPayload));

    }, [dispatch])

    return (
        <div>
            {/* Your component JSX here */}
        </div>
    );
}
