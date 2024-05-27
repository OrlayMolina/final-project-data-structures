import React from 'react';


/**
 * Alert component used to display informative messages to users.
 * @param {React.ReactNode} children - The content to be displayed inside the alert.
 * @returns {JSX.Element} The Alert component.
 */
export default function Alert({children}: {children: React.ReactNode}) {
    return (
        <div className='text-center  bg-red-600 text-white rounded-xl font-bold p-3 uppercase mb-6'>
            {children}
        </div>
    )
}