import { createContext, useState, useEffect } from 'react';
import api from '../utils/api';

const UserContext = createContext(null);

function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [userLoading, setUserLoading] = useState(false);
    const [userError, setUserError] = useState(null);

    useEffect(() => {
        getCurrentUser();
    }, [])

    async function handleAuth(type, userData) {
        const isLogin = type === 'login';

        try {
            setUserLoading(true);
            setUserError(null);
            const url = isLogin ? '/api/auth/login' : '/api/auth/register';
            const { data } = await api.post(url, userData);

            if (!data.user) {
                throw new Error(isLogin ? "Invalid email or password" : "Registration failed");
            }

            setUser(data.user);
            return true;
        } catch (error) {
            setUserError(error.response.data.message || "Something went wrong, please try again.");
            return false;
        } finally {
            setUserLoading(false);
        }
    }

    async function logoutUser() {
        try {
            await api.post('/api/auth/logout');

            setUser(null);
        } catch (error) {
            console.error(error);
        }
    }

    async function getCurrentUser() {
        try {
            setUserLoading(true);
            const response = await api.get('/api/auth/me');
            setUser(response.data);
        } catch (error) {
            setUser(null);
            console.log(error.message);
        } finally {
            setUserLoading(false);
        }
    }

    return (
        <UserContext.Provider value={{
            user, setUser,
            userLoading, setUserLoading,
            userError, setUserError,
            handleAuth, logoutUser
        }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext };
export default UserProvider;