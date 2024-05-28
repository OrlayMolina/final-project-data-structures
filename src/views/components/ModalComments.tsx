import { selectComments, selectModalComments, setModalComments } from "../../redux/features/post/post.slice";
import { useSelector, useDispatch } from "react-redux";

export default function ModalComments() {
    const dispatch = useDispatch();
    const modal = useSelector(selectModalComments);
    const comments = useSelector(selectComments);

    let countComments = 0;
    if (comments) {
        comments.forEach((post) => {
            countComments++;
        });
    }

    const changeModal = () => {
        const newState = !modal;
        console.log(newState);
        dispatch(setModalComments(newState));
    }

    return (
        <>
            {modal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 md:w-2/3 lg:w-1/2 max-h-screen overflow-y-auto">
                        <h2 className="text-2xl font-bold mb-6 text-center">Comments</h2>
                        {countComments > 0 ? (
                            comments.map(comment => (
                                <div key={comment.date} className="mb-4">
                                    <h3 className="text-xl font-semibold text-teal-600">{comment.getSeller().getName()}</h3>
                                    <p className="text-base text-gray-700">{comment.getComment()}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-base text-gray-500">No comments yet.</p>
                        )}
                        <button 
                            className="mt-6 px-6 py-3 bg-teal-600 hover:bg-teal-800 text-white rounded-lg shadow-md w-full md:w-auto mx-auto block"
                            onClick={changeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
