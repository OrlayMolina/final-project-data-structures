import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addLike } from '../post.slice';
import { selectUserLogged, selectSellerLogged } from '../../social.media/social.media.slice';
import { selectModalComments, setModalComments } from '../post.slice';
import { setCurrentPost } from '../post.slice';
import { selectModalSeller, setModalSeller } from '../../seller/seller.slice';
import { IPost } from '../../../../classes.typescript/interfaces/Post.type';
import { formatMoney } from '../../../../classes.typescript/helpers/utilities';
import { Like } from '../../../../classes.typescript/models/Like';

export default function Post({ post }: {post: IPost | null}):JSX.Element {
    const dispatch = useDispatch();
    const [heartColor, setHeartColor] = useState<'none' | 'red'>('none');
    const userLogged = useSelector(selectUserLogged);
    const sellerLogged = useSelector(selectSellerLogged);
    const modalSeller = useSelector(selectModalSeller);
    const modalComments = useSelector(selectModalComments);
    const navigate = useNavigate();

    if (!post) {
        return <div>Loading...</div>;
    }

    const { nameProduct, price, image, likes } = post;

    const handleHeartClick = () => {
        if (!sellerLogged) {
            navigate('/account/login');
            return;
        }

        // Crear una instancia de Like
        const newLike = new Like({ seller: sellerLogged, date: new Date() });

        const existingLike = likes.searchNode(newLike);
        if (existingLike) {
            likes.delete(existingLike.getData());
            setHeartColor('none');
        } else {
            likes.putAtEnd(newLike);
            setHeartColor('red');
        }

        dispatch(addLike(post.likes));
    };

    const handleCartClick = () => {
        if (!userLogged) {
            navigate('/account/login');
        }
    };

    const handleSetPost = () => {
        dispatch(setCurrentPost(post));
    };

    const toggleModal = () => {
        const newState = !modalSeller;
        dispatch(setModalSeller(newState));
    };

    const toggleModalComments = () => {
        const newState = !modalComments;
        dispatch(setModalComments(newState));
    };

    return (
        <div className="border border-slate-500 w-80 p-6 shadow-lg rounded-xl bg-orange-100" onMouseEnter={handleSetPost}>
            <div className="flex flex-col items-start">
                <img
                    src={`/img/${image}.png`}
                    alt={`${nameProduct} image`}
                    className="w-auto object-cover rounded-xl cursor-pointer hover:opacity-80 transition duration-300 ease-in-out"
                    onClick={() => {
                        toggleModal();
                        handleCartClick();
                        handleSetPost();
                    }}
                />

                <div className="py-2 flex items-center">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill={heartColor} 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="currentColor" 
                        className="w-6 h-6 mx-1 cursor-pointer" 
                        onClick={handleHeartClick}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>

                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="currentColor" 
                        className="w-6 h-6 mx-1 cursor-pointer"
                        onClick={toggleModalComments}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                    </svg>

                    <div className="flex flex-col ml-2">
                        <h3 className="text-2xl font-bold cursor-pointer">{nameProduct}</h3>
                    </div>
                </div>

                <p className="font-black text-4xl text-amber-500 bottom-0">
                    {formatMoney(price)}
                </p>     
            </div>
        </div>
    )
}
