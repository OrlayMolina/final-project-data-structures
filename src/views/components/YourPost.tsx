import { selectPostList } from "../../redux/features/seller/seller.slice";
import { useSelector } from "react-redux";
import { IPost } from "../../classes.typescript/interfaces/Post.type";
import Post from "../../redux/features/post/components/Post";
import Header from "./Header";
import Footer from "./Footer";

export default function YourPost() {
    const sellerPostList = useSelector(selectPostList);

    const hasPosts = sellerPostList && !sellerPostList.isEmpty();

    return (
        <>
            <Header />
            <div className='border-2 border-slate-200'></div>

            <div className="flex flex-col mx-6 md:mx-16 lg:mx-32 mb-12">
                <h1 className="text-4xl font-black mt-8 mb-5 text-center">
                    {hasPosts ? "Your Posts" : "You have no Post"}
                </h1>
            </div>

            <>
                <div className="mt-10 mx-3 md:mx-4 lg:mx-6">
                    <h1 className="text-4xl text-teal-600 font-bold mb-5">Publish and you will see your Posts here!</h1>

                    <div className='grid gap-y-24 gap-x-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12'>
                        {hasPosts && Array.from(sellerPostList).map((post: IPost) => (
                            <Post key={post.nameProduct} post={post} />
                        ))}
                    </div>
                </div>
            </>

            <Footer />
        </>
    );
}
