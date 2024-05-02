import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { DataLogin, DataRegister } from "../classes.typescript/interfaces/CustomPropsModal";

type Middleware = 'guest' | 'auth' | 'admin';

export const useAuth = ({middleware, url}: {middleware: Middleware, url: string}) => {

    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const fetchUser = useCallback(async () => {
        const response = await fetch('/api/user', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Error fetching user data');
        }
        const data = await response.json();
        setUser(data);
        return data;
    }, []);

    const login = async (datos: DataLogin, setErrores: (errores: string[]) => void) =>{
        
        try {
            const response = await fetch('/account/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Error logging in');
            }

            localStorage.setItem('AUTH_TOKEN', data.token);
            setErrores([]);
            await fetchUser();
        } catch (error: unknown) {
            setErrores([(error as Error).message || 'Error logging in']);
        }    
    }

    const register = async (datos: DataRegister, setErrors: (errors: string[]) => void, setSuccess: (success: boolean) => void) => {
        
        try {
            const response = await fetch('/account/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Error registering');
            }

            localStorage.setItem('AUTH_TOKEN', data.token);
            setErrors([]);
            await fetchUser();

            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
            }, 3000);
        } catch (error: unknown) {
            setErrors([(error as Error).message || 'Error registering']);
        }
    }

    const logout = async () => {
        await fetch('/account/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        localStorage.removeItem('AUTH_TOKEN');
    }


    useEffect(() => {
        (async () => {
            try {
                const user = await fetchUser();
                if (middleware === 'guest' && user) {
                    navigate(url);
                } else if (middleware === 'auth' && !user) {
                    navigate(url);
                } else if (middleware === 'admin' && (!user || user.role !== 'admin')) {
                    navigate(url);
                }
            } catch (error) {
                if (middleware === 'auth' || middleware === 'admin') {
                    navigate(url);
                }
            }
        })();
    }, [middleware, url, navigate, fetchUser]);

    return { login, register, logout, user };
}