import { useSelector } from "react-redux";
import { CategoryPost } from "../../classes.typescript/models/CategoryPost";
import { selectPostCategory } from "../../redux/features/social.media/social.media.slice";

interface CategoriesProps {
    category: CategoryPost | null;
    onClickCategory: (categorySelected: CategoryPost | null) => void;
}

export default function AsideFilter({ category, onClickCategory }: CategoriesProps): JSX.Element  {

    const currentCategory = useSelector(selectPostCategory);
    const id = category ? category.getId() : null;
    const name = category ? category.getCategory() : null;

    return (
        <div className={`${currentCategory?.getId() === id ? "bg-blue-500" : "bg-white"} flex items-center gap-4 border w-full p-3 hover:bg-blue-400 cursor-pointer`}>

            <button 
                className="text-lg font-bold cursor-pointer truncate"
                type="button"
                onClick={() => onClickCategory(currentCategory)}
            >
                {name}
            </button>
        </div>
    )
}