import { useSelector } from "react-redux";
import { CategoryPost } from "../../classes.typescript/models/CategoryPost";
import { selectPostCategory } from "../../redux/features/social.media/social.media.slice";

interface CategoriesProps {
    category: CategoryPost | null;
    onClickCategory: (categorySelected: CategoryPost | null) => void;
}

/**
 * AsideFilter component displaying category filter option.
 * @param {CategoriesProps} category - The current category.
 * @param {CategoriesProps} onClickCategory - Function to handle category selection.
 * @returns {JSX.Element} The AsideFilter component.
 */
export default function AsideFilter({ category, onClickCategory }: CategoriesProps): JSX.Element  {

    const currentCategory = useSelector(selectPostCategory);
    const id = category ? category.getId() : null;
    const name = category ? category.getCategory() : null;

    return (
        <div className={`${currentCategory?.getId() === id ? "bg-teal-400" : "bg-white"} flex items-center gap-4 border w-full p-3 hover:bg-teal-400 cursor-pointer`}>

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