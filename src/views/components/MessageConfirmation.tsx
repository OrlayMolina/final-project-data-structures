/**
 * Component to display a message confirmation.
 * @param {React.ReactNode} children - The content to be displayed inside the message.
 * @returns {JSX.Element} The MessageConfirmation component.
 */
export default function MessageConfirmation({children}: {children: React.ReactNode}) {
    return (
        <div className='text-center my-2 bg-green-600 text-white font-bold p-3 uppercase'>
            {children}
        </div>
    )
}