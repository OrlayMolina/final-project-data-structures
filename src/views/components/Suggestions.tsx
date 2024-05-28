import { useState } from 'react';
import { Seller } from '../../classes.typescript/models/Sellers';
import { selectSellerLogged } from '../../redux/features/social.media/social.media.slice';
import { useDispatch, useSelector } from 'react-redux';
import { Request } from '../../classes.typescript/models/Request';
import { addRequestSent } from '../../redux/features/seller/seller.slice';
import MessageConfirmation from './MessageConfirmation';

/**
 * Component to render a suggestion for contacting a seller.
 * @param {Seller | null} contact - The seller to display as a suggestion.
 * @returns {JSX.Element} The Suggestions component.
 */
export default function Suggestions({ contact }: {contact: Seller | null}):JSX.Element {

    const dispatch = useDispatch();
    const {name, lastName} = contact;
    const seller: Seller | null = useSelector(selectSellerLogged);

    const [showAlert, setShowAlert] = useState(false);

    const handleSummit = async (e: { preventDefault: () => void }) =>{
        e.preventDefault();
        const date = new Date();
        const accept: boolean = false;
        const requestSent: Request = new Request({ contact, date, accept });
        dispatch(addRequestSent(requestSent));

        setShowAlert(true);
        // Ocultar el Alert después de 2 segundos
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    }


    return (
        <>
            {showAlert && <MessageConfirmation>Request sent successfully</MessageConfirmation>} 
            <div className='grid gap-y-24 gap-x-6 grid-cols-1 md:grid-cols-2'>

                
                
                <form 
                    onClick={handleSummit}
                    className="flex flex-row items-center mt-10 mx-3 md:mx-4 lg:mx-6" 
                    noValidate>
                    <img src="/img/User.png" alt="user image"  className='w-16 h-16 m-2'/>
                    <h1 className="text-4xl text-teal-600 font-bold mb-5 m-4">{name + ' ' + lastName}</h1>
                    <input
                        type="submit"
                        value="Request Sent"
                        className="bg-teal-600 hover:bg-teal-800 text-white w-full rounded-xl shadow-md mt-5 p-1 uppercase font-bold cursor-pointer"
                    />

                </form>
            </div>
        </>
    )
}
