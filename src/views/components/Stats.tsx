import { selectSellerList, selectPostLists } from "../../redux/features/social.media/social.media.slice";
import { selectPostList } from "../../redux/features/seller/seller.slice";
import { useSelector } from "react-redux";

export default function Stats() {
    // Replace these with the actual numbers
    const sellerList = useSelector(selectSellerList);
    const postList = useSelector(selectPostList);
    const postLists = useSelector(selectPostLists);

    let totalUsers = 0;
    sellerList.forEach((seller) => {
        totalUsers++;
    });

    let yourPosts = 0;
    if (postList) {
        postList.forEach((post) => {
            yourPosts++;
        });
    }

    let totalPosts = 0;
    if (postLists) {
        postLists.forEach((post) => {
            totalPosts++;
        });
    }
    const totalComments = 300;

    return (
        <>
            <div className='border-2 border-slate-200'>
        
            </div>

            <div className="flex flex-col mx-6 md:mx-12 lg:mx-16 mb-12">
                <h1 className="text-4xl font-black mt-8 mb-5 text-center">Stats</h1>

                <div className="bg-white shadow-xl rounded-xl mt-8 px-2">
                    <div className='grid gap-y-24 gap-x-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8'>
                        <div className="flex flex-col items-center mt-10 mx-3 md:mx-4 lg:mx-6">
                            <h2 className="text-2xl font-bold mb-4">Total Users</h2>
                            <p className="text-xl">{totalUsers}</p>
                        </div>
                        <div className="flex flex-col items-center mt-10 mx-3 md:mx-4 lg:mx-6">
                            <h2 className="text-2xl font-bold mb-4">Total Posts</h2>
                            <p className="text-xl">{totalPosts}</p>
                        </div>

                        <div className="flex flex-col items-center mt-10 mx-3 md:mx-4 lg:mx-6">
                            <h2 className="text-2xl font-bold mb-4">Your Posts</h2>
                            <p className="text-xl">{yourPosts}</p>
                        </div>
                        <div className="flex flex-col items-center mt-10 mx-3 md:mx-4 lg:mx-6">
                            <h2 className="text-2xl font-bold mb-4">Total Comments</h2>
                            <p className="text-xl">{totalComments}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}