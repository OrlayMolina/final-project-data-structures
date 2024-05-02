import {createBrowserRouter} from 'react-router-dom';
import WallPost from './views/components/WallPost';
import Layout from './views/layout/Layout';
import AuthLayout from './views/layout/AuthLayout';
import Login from './views/components/Login';
import Register from './views/components/Register';
import Home from './views/components/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/wallpost',
                element: <WallPost />
            }
        ]
    },
    {
        path: '/account',
        element: <AuthLayout />,
        children: [
            {
                path: '/account/login',
                element: <Login />
            },
            {
                path: '/account/register',
                element: <Register />
            }
        ]
    }
]);

export default router;