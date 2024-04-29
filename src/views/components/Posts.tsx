import { selectCurrentPost } from "../../redux/features/post/post.slice";
import Post from "../../redux/features/post/components/Post";
import { IPost } from '../../classes.typescript/interfaces/Post.type';
import { useSelector } from "react-redux";

export default function Posts() {

    const post = useSelector(selectCurrentPost);

    return (
        <>
            <div className="mt-10 mx-6 md:mx-12 lg:mx-16">
                <h1 className="text-4xl text-white font-bold">
                    <span className="px-4 py-1 bg-teal-600 rounded-xl shadow-lg">{post?.getNameProduct()}</span>
                </h1>
                <p className="text-2xl my-10">Choose your favorite product.</p>

                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                    {post && <Post key={post.getNameProduct()} post={post as unknown as IPost} />}
                </div>
            </div>
        
        </>
    )
}
