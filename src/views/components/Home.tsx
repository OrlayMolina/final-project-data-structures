import Data from "../../data/Data.component";
import Posts from '../../views/components/Posts';
import { selectSellerList } from "../../redux/features/social.media/social.media.slice";
import { useSelector } from "react-redux";

/**
 * Home component displaying latest posts.
 * @returns {JSX.Element} The Home component.
 */
export default function Home() {

    const sellerList = useSelector(selectSellerList);
    let count = 0;
    sellerList.forEach((seller) => {
        count++;
    });

    return (
        <div className="bg-gray-100 py-10 px-4 md:px-6 lg:px-8">
            <h1 className="text-center text-gray-800 text-4xl font-bold mb-5">Latest Posts</h1>
            {count === 0 && <Data />}
            <Posts />
        </div>
    )    
}
