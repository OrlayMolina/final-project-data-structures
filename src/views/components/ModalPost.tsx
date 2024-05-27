import { useState } from "react";
import { formatMoney } from "../../classes.typescript/helpers/utilities";
import { useDispatch, useSelector } from "react-redux";
import { setModalSeller, selectModalSeller } from "../../redux/features/seller/seller.slice";
import { selectCurrentPost } from "../../redux/features/post/post.slice";


/**
 * Component representing a modal for displaying product details.
 * @returns {JSX.Element} The ModalPost component.
 */
export default function ModalPost() {

    const dispatch = useDispatch();
    const modal = useSelector(selectModalSeller);
    console.log(modal);
    const product = useSelector(selectCurrentPost);
    const { nameProduct, image, price } = product || {};
    const [quantity, setQuantity] = useState(1);
    const [edition, setEdition] = useState(false);

    const changeModal = () => {
        console.log("modal");
        const newState = !modal;
        console.log(newState)
        dispatch(setModalSeller(newState));
    }
    return (
        
        <div className="md:flex gap-10">
            <div className="md:w-1/3 my-6 mx-6">

                <img 
                    src={`/img/${image}.png`} 
                    alt={`Imagen producto ${nameProduct}`} 
                />

            </div>

            <div className="md:w-2/3">

                <div className="flex justify-end">
                    <button
                        onClick={() => {
                            changeModal();
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                    </button>
                </div>

                <h1 className="text-3xl font-bold">
                    {nameProduct}
                </h1>

                <p className="mt-5 font-black text-5xl text-amber-500">{formatMoney(price || 0)}</p>

                <div className="flex gap-4 mt-5">
                    <button
                        type="button"
                        onClick={() => {
                            if (quantity <= 1 ) return
                            setQuantity(quantity - 1);
                        }}
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" 
                            strokeWidth={1.5} stroke="currentColor" 
                            className="w-6 h-6"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
                            />
                        </svg>
                    </button>
                    <p className="text-3xl">{quantity}</p>

                    <button
                        type="button"
                        onClick={() => {
                            if (quantity >= 5 ) return
                            setQuantity(quantity + 1);
                        }}
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="w-6 h-6"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
                            />
                        </svg>
                    </button>
                </div>

                <button
                    type="button"
                    className="bg-teal-600 hover:bg-teal-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded-md"
                >
                    {edition ? 'Save Changes' : 'Add to Cart'}
                </button>
            </div>
        </div>
    )
}
