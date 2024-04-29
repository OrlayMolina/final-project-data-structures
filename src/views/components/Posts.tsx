import { selectCurrentPost } from "../../redux/features/post/post.slice";
import Post from "../../redux/features/post/components/Post";
import { IPost } from '../../classes.typescript/interfaces/Post.type';
import { useSelector } from "react-redux";

export default function Posts() {

    const post = useSelector(selectCurrentPost);

    return (
        <>
            <div className="mt-10 mx-6 md:mx-12 lg:mx-16">
                <h1 className="text-4xl text-teal-600 font-bold mb-5">Welcome to our Store!</h1>
                <p className="text-2xl text-gray-800 mb-10">Choose your favorite product.</p>
    
                <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <Post post={post as IPost} />
                </div>
            </div>
        </>
    )
    
}
