import { createContext } from 'react';

export interface IUser {
    nickname: string;
}

interface AuthContextType {
    user: IUser | null;
    login: () => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
