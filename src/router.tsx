import {createBrowserRouter} from 'react-router-dom';
import WallPost from './views/components/WallPost';
import Layout from './views/layout/Layout';
import AuthLayout from './views/layout/AuthLayout';
import Login from './views/components/Login';
import Register from './views/components/Register';
import Home from './views/components/Home';
import Contacts from './views/components/Contacts';
import Chats from './views/components/Chats';
import Stats from './views/components/Stats';
import PersonalInformation from './views/components/PersonalInformation';
import ContactSuggestions from './views/components/ContactSuggestions';
import RequestReceived from './views/components/RequestReceived';
import FormPost from './views/components/FormPost';
import RequestSent from './views/components/RequestSent';
import YourPost from './views/components/YourPost';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home/>
            },
        ]
    },
    {
        path: '/wallpost',
        element: <WallPost />,
        children: [
            {
                index: true,
                element: <PersonalInformation />
            },
            {
                path:'/wallpost/request-sent',
                element: <RequestSent />
            },
            {
                path: '/wallpost/create-post',
                element: <FormPost />
            },
            {
                path: '/wallpost/request-received',
                element: <RequestReceived />
            },
            {
                path: '/wallpost/contacts',
                element: <Contacts />
            },
            {
                path: '/wallpost/chats',
                element: <Chats />
            },
            {
                path: '/wallpost/stats',
                element: <Stats />
            }
            
        ]
    },
    {
        path: '/contact-suggestions',
        element: <ContactSuggestions/>
    },
    {
        path: '/yourposts',
        element: <YourPost/>
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