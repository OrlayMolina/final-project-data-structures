import { IPost } from '../../../../classes.typescript/interfaces/Post.type';
import { formatMoney } from '../../../../classes.typescript/helpers/utilities';

export default function Post({ post }: {post: IPost}):JSX.Element {

    const { nameProduct, price, image } = post;


    return (
        <div className="border w-80 p-6 shadow rounded-xl bg-white">
            <div className="flex flex-col items-center">
                <img
                    src={`/img/${image}.JPG`}
                    alt={`${nameProduct} image`}
                    className="w-auto object-cover rounded-xl cursor-pointer hover:opacity-80 transition duration-300 ease-in-out"
                />

                <div className="p-5 flex flex-col items-start">
                    <h3 className="text-2xl font-bold">{nameProduct}</h3>
                    <p className="mt-5 font-black text-4xl text-amber-500 bottom-0">
                        {formatMoney(price)}
                    </p>
                </div>

                <button 
                    type="button"
                    className="bg-teal-600 hover:bg-teal-800 text-white w-full mt-5 p-3 uppercase rounded-2xl font-bold"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}
