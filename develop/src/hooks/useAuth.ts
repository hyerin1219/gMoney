import { useContext } from 'react';
import { AuthContext } from '../components/common/auth/authContext';

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('AuthProvider 안에서만 사용 가능');
    return context;
};
