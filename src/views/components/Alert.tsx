import React from 'react';

export default function Alert({children}: {children: React.ReactNode}) {
    return (
        <div className='text-center  bg-red-600 text-white rounded-xl font-bold p-3 uppercase mb-6'>
            {children}
        </div>
    )
}