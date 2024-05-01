import {createBrowserRouter} from 'react-router-dom';
import Layout from './views/layout/Layout';
import Home from './views/components/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home/>
            }
        ]
    }
]);

export default router;