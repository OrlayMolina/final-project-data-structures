import { selectPostLists } from "../../redux/features/social.media/social.media.slice";
import Post from "../../redux/features/post/components/Post";
import { IPost } from '../../classes.typescript/interfaces/Post.type';
import { selectPostCategory, setPostCategory } from "../../redux/features/social.media/social.media.slice";
import { useSelector, useDispatch } from "react-redux";

/**
 * Component for displaying a list of posts.
 * @returns {JSX.Element} The Posts component.
 */
export default function Posts() {

    const dispatch = useDispatch();
    const postList = useSelector(selectPostLists);
    const currentCategory = useSelector(selectPostCategory);
    const title = currentCategory?.getCategory() ? currentCategory.getCategory() : 'Welcome to our Store!';

    const leakedPosts = currentCategory?.getCategory() === 'CLEAR CATEGORY' 
    ? dispatch(setPostCategory(null)) 
    : currentCategory?.getId() 
        ? postList.filter(post => post.getCategory() === currentCategory?.getCategory()) 
        : postList;

    return (
        <>
            <div className="mt-10 mx-3 md:mx-4 lg:mx-6">
                <h1 className="text-4xl text-teal-600 font-bold mb-5">{title}</h1>
                <p className="text-2xl text-gray-800 mb-10">Choose your favorite product.</p>

                <div className='grid gap-y-24 gap-x-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {Array.from(leakedPosts).map((post: IPost) => (
                        <Post key={post.nameProduct} post={post} />
                    ))}
                </div>
            </div>
        </>
    )
    
}
