import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';


/**
 * Component for the search bar.
 * @returns {JSX.Element} The SearchBar component.
 */
export default function SearchBar() {
    return (
        <div className='bg-gray-800 text-white sticky top-0'>
            <div className="flex flex-col lg:flex-row items-center justify-between ml-3">
                {/*<button className="bg-gray-800 text-white font-medium text-xl ml-24 p-2 mr-10 rounded-md lg:ml-0 lg:mr-3">
                    All Categories
                </button>

                <p className='text-xl text-white italic m-1 lg:ml-16 lg:mr-0'>Find the best products in one place</p>*/}

                <form className='flex items-center flex-row m-1 lg:mr-6'>
                    <MagnifyingGlassIcon className="h-8 w-8 mr-4" />
                    <input 
                        type="text" 
                        placeholder="Search for products, sellers, etc."
                        className="rounded-2xl p-2 bg-white w-full lg:w-96"
                    />
                </form>
            </div>
        </div>
    )
}