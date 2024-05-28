import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PostState } from '../../classes.typescript/enum/PostState';
import { DoubleList } from '../../classes.typescript/own.structures/linked.lists/list/DoubleList';
import { addPost } from '../../redux/features/seller/seller.slice';
import MessageConfirmation from './MessageConfirmation';
import { addPosts } from '../../redux/features/social.media/social.media.slice';
import { Post } from '../../classes.typescript/models/Post';
import { Like } from '../../classes.typescript/models/Like';
import { Comment } from '../../classes.typescript/models/Comment';

const FormPost = () => {
    const dispatch = useDispatch();
    const [nameProduct, setNameProduct] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [postState, setPostState] = useState(PostState.DRAFT);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const newPost: Post = new Post({
            nameProduct,
            description,
            image,
            category,
            price: parseFloat(price),
            postState,
            comments: new DoubleList<Comment>(),
            likes: new DoubleList<Like>()
        });

        dispatch(addPost(newPost));
        dispatch(addPosts(newPost));

        setShowConfirmation(true);
        setTimeout(() => setShowConfirmation(false), 2000);
    };

    return (
        <div className="flex flex-col mx-6 md:mx-16 lg:mx-32 mb-12">
            <h1 className="text-4xl font-black mt-8 mb-5 text-center">Create Post</h1>
            <div className="flex flex-col mx-6 md:mx-16 lg:mx-32 mb-12">
                {showConfirmation && <MessageConfirmation>Post created successfully</MessageConfirmation>}
                {/* rest of your code */}
            </div>
            <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-6">
                    <div className="mb-4">
                        <label htmlFor="nameProduct" className="block text-slate-800">Product Name:</label>
                        <input
                            type="text"
                            id="nameProduct"
                            value={nameProduct}
                            onChange={(e) => setNameProduct(e.target.value)}
                            required
                            className="mt-2 w-full p-3 bg-gray-50 rounded-md border border-slate-300"
                            placeholder="Product Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-slate-800">Description:</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            className="mt-2 w-full p-3 bg-gray-50 rounded-md border border-slate-300"
                            placeholder="Description"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-slate-800">Image URL:</label>
                        <input
                            type="text"
                            id="image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            required
                            className="mt-2 w-full p-3 bg-gray-50 rounded-md border border-slate-300"
                            placeholder="Image URL"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="category" className="block text-slate-800">Category:</label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                            className="mt-2 w-full p-3 bg-gray-50 rounded-md border border-slate-300"
                        >
                            <option value="APPLIENCES">Appliances</option>
                            <option value="BOOKS">Books</option>
                            <option value="HOME">Home</option>
                            <option value="SPORT">Sport</option>
                            <option value="TECHNOLOGY">Technology</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-slate-800">Price:</label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                            className="mt-2 w-full p-3 bg-gray-50 rounded-md border border-slate-300"
                            placeholder="Price"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="postState" className="block text-slate-800">Post State:</label>
                        <select
                            id="postState"
                            value={postState}
                            onChange={(e) => setPostState(e.target.value)}
                            required
                            className="mt-2 w-full p-3 bg-gray-50 rounded-md border border-slate-300"
                        >
                            <option value={PostState.DRAFT}>Draft</option>
                            <option value={PostState.PUBLISHED}>Published</option>
                        </select>
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-teal-600 hover:bg-teal-800 text-white rounded-xl shadow-md mt-6 p-3 px-8 uppercase font-bold cursor-pointer w-full"
                >
                    Create Post
                </button>
            </form>
        </div>
    );
};

export default FormPost;
