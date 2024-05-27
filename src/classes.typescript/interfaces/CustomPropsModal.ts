/**
 * Defines the structure of custom properties for styling or positioning components.
 */
export interface CustomProps {
    content: {
        top?: string | number;
        left?: string | number;
        bottom?: string | number;
        right?: string | number;
        transform?: "none" | "translate" | "rotate" | string;
        marginRight?: string;
    }
}

/**
 * Defines the structure of data required for user login.
 */
export interface DataLogin {
    username: string | undefined;
    password: string | undefined;
}

/**
 * Defines the structure of data required for user registration.
 */
export interface DataRegister {
    name: string | undefined;
    lastname: string | undefined;
    ID: string | undefined;
    address: string | undefined;
    username: string | undefined;
    password: string | undefined;
    password_confirmation: string | undefined;
}