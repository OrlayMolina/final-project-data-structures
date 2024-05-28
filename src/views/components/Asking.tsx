import { Request } from "../../classes.typescript/models/Request"


/**
 * Asking component displaying request information.
 * @param {Object} props - The component props.
 * @param {Request | null} props.request - The request object.
 * @returns {JSX.Element} The Asking component.
 */
export default function Asking({ request }: {request: Request | null}):JSX.Element {

    const { contact } = request;

    return  (
        <div className='grid gap-y-24 gap-x-2 grid-cols-1'>
            <form 
        
                className="flex flex-row items-center mt-10 mx-3 md:mx-4 lg:mx-6" 
                noValidate>
                <img src="/img/User.png" alt="user image"  className='w-16 h-16 m-2'/>
                <h1 className="text-4xl text-teal-600 font-bold mb-5 m-4">{contact.getName() + " " + contact.getLastName()}</h1>
    

            </form>
        </div>
    )
  
}
