import { selectUserLogged, setSellerLogged, setUserLogged, setLoginErrors } from "../../redux/features/social.media/social.media.slice";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import ShippingInfo from "./ShippingInfo";
import SearchBar from './SearchBar';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const navigation = [
    { name: 'WallPost', to: '/wallpost', current: true },
    { name: 'Your Posts', to: '/yourposts', current: false },
    { name: 'Contact Suggestion', to: '/contact-suggestions', current: false },
];

/**
 * Header component displaying navigation links and user actions.
 * @returns {JSX.Element} The Header component.
 */
export default function Header(): JSX.Element {

  const dispatch = useDispatch();
  const userLogged = useSelector(selectUserLogged);

  const handleLogout = () => {
    dispatch(setUserLogged(false));
    dispatch(setSellerLogged(null));
    dispatch(setLoginErrors(["Enter Again!"]));
    setTimeout(() => {
      dispatch(setLoginErrors([]));
    }, 3000);
  };

  return (
    <div className="bg-gray-800 sticky top-0 z-50">
      <ShippingInfo />
      <Disclosure as="nav" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <NavLink to="/" className="text-white">
                    <img 
                        className="h-12 w-16"
                        src="/img/logo.JPG" 
                        alt="Logo" />
                  </NavLink>
                </div>
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                            // Verificar si el usuario está logueado antes de mostrar el enlace
                            userLogged ? (
                              <NavLink
                                key={item.name}
                                to={item.to}
                                className="text-gray-300 hover:text-white px-3 py-1 rounded-md text-sm font-medium"
                              >
                                {item.name}
                              </NavLink>
                            ) : null
                        ))}
                    </div>
                </div>
              </div>
              <div className="hidden md:flex items-center">
                <SearchBar />
                {userLogged && (
                  <button
                    type='button'
                    onClick={handleLogout}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  >
                    Exit
                  </button>
                )}
              </div>
              <div className="-mr-2 flex md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
  
            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  // Verificar si el usuario está logueado antes de mostrar el enlace
                  userLogged ? (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item.name}
                    </NavLink>
                  ) : null
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
