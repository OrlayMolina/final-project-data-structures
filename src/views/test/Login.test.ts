import { configureStore } from 'redux-mock-store';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Login from '../components/Login';
import router from '../../router';
import { useAuth } from '../../hooks/useAuth';
import '@testing-library/jest-dom/extend-expect';

// Mock the useAuth hook
jest.mock('../../hooks/useAuth', () => ({
    useAuth: jest.fn(),
}));

const mockStore = configureStore([]);
const store = mockStore({
    socialMedia: {
        loginErrors: [],
    },
});

describe('Login Component', () => {
    beforeEach(() => {
        (useAuth as jest.Mock).mockReturnValue({
            login: jest.fn(),
        });
    });
    test('should render the login component',() => {
        render(
            <Provider store={store}>
                <BrowserRouter> 
                    <Login/>
                </BrowserRouter>
            </Provider>
        )
        expect(screen.getByText('Login')).toBeInTheDocument();
    });

});
