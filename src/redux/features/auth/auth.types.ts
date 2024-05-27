/**
 * Interface representing the authentication state in Redux.
 */
export interface AuthState {
    isLoggedIn: boolean;
    userRole: string | null;
}