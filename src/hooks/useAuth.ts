import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Post } from "../classes.typescript/models/Post";
import { Chat } from "../classes.typescript/models/Chat";
import { Seller } from "../classes.typescript/models/Sellers";
import { DoubleList } from "../classes.typescript/own.structures/linked.lists/list/DoubleList";
import { selectSellerList, selectLoginErrors, setLoginErrors, setSellerList } from "../redux/features/social.media/social.media.slice";
import { setUserLogged, selectUserLogged, setSellerLogged } from "../redux/features/social.media/social.media.slice";
import { DataLogin, DataRegister } from "../classes.typescript/interfaces/CustomPropsModal";

type Middleware = 'guest' | 'auth' | 'admin';

/**
 * Custom hook for managing user authentication.
 * It handles user login, logout, and authentication status.
 * @param {Object} options - Options object containing middleware and redirect URL.
 * @param {Middleware} options.middleware - The required authentication level.
 * @param {string} options.url - The URL to redirect after authentication.
 * @returns {Object} An object containing user authentication state and functions.
 */
export const useAuth = ({ middleware, url }: { middleware: Middleware, url: string }) => {
    const dispatch = useDispatch();
    const userLogged = useSelector(selectUserLogged);
    const sellerList = useSelector(selectSellerList);
    const navigate = useNavigate();
    const errors = useSelector(selectLoginErrors);
    const [registerErrors, setRegisterErrors] = useState<string[]>([]);

    /**
     * Function to simulate user login.
     * @param {DataLogin} datos - User login data.
     * @returns {Promise<void>}
     */
    const login = async (datos: DataLogin) => {
        // Lógica de autenticación simulada sin llamadas API reales
        let foundSeller: Seller | null = null;
        for (const seller of sellerList) {
            if (seller.getUserName() === datos.username && seller.getPassword() === datos.password) {
                foundSeller = seller;
                break;
            }
        }

        if (foundSeller) {
            dispatch(setUserLogged(true));
            dispatch(setSellerLogged(foundSeller));
            navigate("/");
        } else {
            dispatch(setLoginErrors(["invalid credentials"]));

            setTimeout(() => {
                dispatch(setLoginErrors([]));
            }, 3000);

        }
    };

    /**
     * Function to handle user registration.
     * @param {DataLogin} datos - New seller data.
     * @returns {Promise<void>}
     */
        const register = async (datos: DataRegister) => {
            const existingSeller = sellerList.find(seller => seller.getUserName() === datos.username);
    
            if (existingSeller) {
                setRegisterErrors(['Username already exists']);
                setTimeout(() => {
                    setRegisterErrors([]);
                }, 3000);
            } else {

                const newSeller: Seller = new Seller({
                    name: datos.name ?? '',
                    lastName: datos.lastname ?? '', // Add a default value for lastName
                    ID: datos.ID ?? '',
                    address: datos.address ?? '', // Add a default value for address
                    userName: datos.username ?? '',
                    password: datos.password ?? '',
                    admin: false,
                    postList: new DoubleList<Post>(),
                    contactList: new DoubleList<Seller>(),
                    chatList: new DoubleList<Chat>(),
                    requestReceivedList: new DoubleList<Request>(),
                    requestSentList: new DoubleList<Request>()
                });
    
                const updatedSellerList = new DoubleList<Seller>();
                sellerList.forEach(seller => updatedSellerList.putInFront(seller));
                updatedSellerList.putInFront(newSeller);
    
                dispatch(setSellerList(updatedSellerList));
                dispatch(setSellerLogged(newSeller));
                dispatch(setUserLogged(true));
                navigate("/");
            }
        };

    /**
     * Function to handle user logout.
     */
    const logout = () => {
        dispatch(setUserLogged(false));
        dispatch(setSellerLogged(null));
        navigate(url);
    };

    useEffect(() => {
        // Verificar el estado de autenticación del usuario y redirigir si es necesario
        if (middleware === 'guest' && userLogged) {
            navigate(url);
        } else if ((middleware === 'auth' || middleware === 'admin') && !userLogged) {
            navigate(url);
        }
    }, [middleware, url, userLogged, navigate]);

    return { userLogged, errors, login, logout, register };
};