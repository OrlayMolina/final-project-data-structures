import {createBrowserRouter} from 'react-router-dom';
import Layout from './views/layout/Layout';
import Home from './views/components/Home';
import MyComponent from './data/MyComponent';

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
                element: <MyComponent />
            }
        ]
    }
]);

export default router;