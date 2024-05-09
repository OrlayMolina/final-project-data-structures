import Data from "../../data/Data.component";
import Posts from '../../views/components/Posts';

export default function Home() {
    return (
        <div className="bg-gray-100 py-10 px-4 md:px-6 lg:px-8">
            <h1 className="text-center text-gray-800 text-4xl font-bold mb-5">Latest Posts</h1>
            <Data />
            <Posts />
        </div>
    )    
}
