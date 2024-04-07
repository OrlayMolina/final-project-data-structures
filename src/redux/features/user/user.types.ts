export interface UserProps {
    id: string;
    name: string;
    lastName: string;
    address: string;
    user: string;
    password: string;
    email: string;
    admin: boolean;
}

export interface UserState {
    status: "idle" | "loading" | "succeeded" | "failed";
    users: UserProps[];
}