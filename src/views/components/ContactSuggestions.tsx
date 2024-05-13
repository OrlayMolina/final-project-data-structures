import { Seller } from "../../classes.typescript/models/Sellers"
import { DoubleList } from "../../classes.typescript/own.structures/linked.lists/list/DoubleList"
import { selectSellerList } from "../../redux/features/social.media/social.media.slice"
import { useSelector } from "react-redux"
import Header from "./Header"
import Footer from "./Footer"
import Suggestions from "./Suggestions"

export default function ContactSuggestions() {
    const contactSuggestions: DoubleList<Seller> = useSelector(selectSellerList );

    return (
        <>
            <Header />
            <div className='border-2 border-slate-200'>
            
            </div>
            <div className="flex flex-col mx-6 md:mx-16 lg:mx-32 mb-12">
                <h1 className="text-4xl font-black mt-8 mb-5 text-center">Contact Suggestions</h1>

                <div className="bg-white shadow-xl rounded-xl mt-8 px-5">
                    <div className='grid gap-y-24 gap-x-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {Array.from(contactSuggestions).map((contact: Seller) => (
                            <Suggestions key={contact.getID()} contact={contact} />
                        ))}
                    </div>
                </div>

            </div>

            <Footer />
        
        </>
    )
}
