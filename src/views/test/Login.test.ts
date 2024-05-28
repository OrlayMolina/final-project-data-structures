import { configureStore } from 'redux-mock-store';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Login from '../components/Login';
import { useAuth } from '../../hooks/useAuth';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom/extend-expect';
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
    test('clears error messages when user starts typing', () => {
        const errorStore = mockStore({
            socialMedia: {
                loginErrors: ['Invalid username or password'],
            },
        });

        // ...

            expect(screen.queryByText('Invalid username or password')).not.toBeInTheDocument();
        expect(screen.queryByText('Invalid username or password')).not.toBeInTheDocument();
    });

});
