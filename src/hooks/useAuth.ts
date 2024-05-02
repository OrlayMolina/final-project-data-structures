import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Seller } from "../classes.typescript/models/Sellers";
import { selectSellerList, selectLoginErrors, setLoginErrors } from "../redux/features/social.media/social.media.slice";
import { setUserLogged, selectUserLogged, setSellerLogged } from "../redux/features/social.media/social.media.slice";
import { DataLogin } from "../classes.typescript/interfaces/CustomPropsModal";

type Middleware = 'guest' | 'auth' | 'admin';

export const useAuth = ({ middleware, url }: { middleware: Middleware, url: string }) => {
    const dispatch = useDispatch();
    const userLogged = useSelector(selectUserLogged);
    const sellerList = useSelector(selectSellerList);
    const navigate = useNavigate();
    const errors = useSelector(selectLoginErrors);

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

    const logout = () => {
        dispatch(setUserLogged(false));
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

    return { userLogged, errors, login, logout };
};