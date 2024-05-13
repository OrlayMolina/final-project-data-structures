import { Request } from "../../classes.typescript/models/Request"

export default function Asking({ request }: {request: Request | null}):JSX.Element {

    const { accept} = request;

    return  (
        <div className='grid gap-y-24 gap-x-6 grid-cols-1 md:grid-cols-2'>
            <form 
        
                className="flex flex-row items-center mt-10 mx-3 md:mx-4 lg:mx-6" 
                noValidate>
                <img src="/img/User.png" alt="user image"  className='w-16 h-16 m-2'/>
                <h1 className="text-4xl text-teal-600 font-bold mb-5 m-4">{accept}</h1>
    

            </form>
        </div>
    )
  
}
