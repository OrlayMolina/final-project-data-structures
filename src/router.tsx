import {createBrowserRouter} from 'react-router-dom';
import Layout from './views/layout/Layout';
import WallPost from './views/components/WallPost';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/suggestions',
                element: <WallPost />
            }
        ]
    }
]);

export default router;