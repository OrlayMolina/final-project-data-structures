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

export interface DataLogin {
    email: string | undefined;
    password: string | undefined;
}

export interface DataRegister {
    name: string | undefined;
    lastname: string | undefined;
    ID: string | undefined;
    address: string | undefined;
    username: string | undefined;
    password: string | undefined;
    password_confirmation: string | undefined;
}