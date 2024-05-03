import { useDispatch, useSelector } from "react-redux";
import { CategoryPost } from "../../classes.typescript/models/CategoryPost";
import AsideFilter from "../components/AsideFilter";
import { setPostCategory, selectAllCategories } from "../../redux/features/social.media/social.media.slice";

export default function Sidebar() {

    const dispatch = useDispatch();
    const categories: CategoryPost[] = useSelector(selectAllCategories);

    const handleClickCategory = (category: CategoryPost | null) => {
        dispatch(setPostCategory(category));
    }

    return (
        <aside className="md:w-70 mx-4">
            <div className="p-4">   
                <img 
                    className="w-40 m-auto"
                    src="/img/logo_background_white.JPG" 
                    alt="imagen logo" 
                />
            </div>

            <div className="mt-10">
            {Array.isArray(categories) && categories.map((category: CategoryPost) => (
                    <AsideFilter
                        key={category.getId()}
                        category={category} 
                        onClickCategory={() => handleClickCategory(category)}
                    
                    />
                ))}
            </div>

            <div className="my-5 px-5">

            </div>
        </aside>
    )
}
