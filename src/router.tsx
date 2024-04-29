import {createBrowserRouter} from 'react-router-dom';
import Layout from './views/layout/Layout';
import Home from './views/components/Home';
import Posts from './views/components/Posts';

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
                path: '/ejemplo',
                element: <Posts />
            }
        ]
    }
]);

export default router;