import { Seller } from "../../classes.typescript/models/Sellers"
import { DoubleList } from "../../classes.typescript/own.structures/linked.lists/list/DoubleList"
import { selectSellerLogged  } from "../../redux/features/social.media/social.media.slice"
import { useSelector } from "react-redux"
import { Request } from "../../classes.typescript/models/Request"
import Asking from "./Asking"

/**
 * Component to display requests sent by the seller.
 * @returns {JSX.Element} The RequestSent component.
 */
export default function RequestSent() {
    const seller  : Seller = useSelector(selectSellerLogged);
    const requestList: DoubleList<Request> = seller.getRequestSentList();


    return (
        <>
            <div className='border-2 border-slate-200'>
            
            </div>
            <div className="flex flex-col mx-6 md:mx-16 lg:mx-32 mb-12">
                <h1 className="text-4xl font-black mt-8 mb-5 text-center">REQUEST SENT</h1>

                <div className="bg-white shadow-xl rounded-xl mt-8 px-5">
                    <div className='grid gap-y-24 gap-x-6 grid-cols-1 md:grid-cols-2'>
                        {Array.from(requestList).map((request : Request) => (
                            <Asking key={request.getDate()} request={request} />
                        ))}
                    </div>
                </div>

            </div>
        
        </>
    )
}
