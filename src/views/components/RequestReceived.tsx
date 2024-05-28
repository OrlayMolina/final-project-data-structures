import React from 'react'

export default function RequestReceived() {
    return (
        <>
            <div className='border-2 border-slate-200'>
        
            </div>

            <div className="flex flex-col mx-6 md:mx-12 lg:mx-16 mb-12">
                <h1 className="text-4xl font-black mt-8 mb-5 text-center">Requests Received</h1>

                <div className="bg-white shadow-xl rounded-xl mt-8 px-2">
                    <div className='grid gap-y-24 gap-x-6 grid-cols-1 md:grid-cols-2'>
                        <form 
                            className="flex flex-row items-center mt-10 mx-3 md:mx-4 lg:mx-6" 
                            noValidate>
                            <img src="/img/User.png" alt="user image"  className='w-16 h-16 m-2'/>
                            <h1 className="text-4xl text-teal-600 font-bold mb-5 m-4">John Doe</h1>
                            <input
                                type="submit"
                                value="Request Sent"
                                className="bg-teal-600 hover:bg-teal-800 text-white w-full rounded-xl shadow-md mt-5 p-1 uppercase font-bold cursor-pointer"
                            />

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
