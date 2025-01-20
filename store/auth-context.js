import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: () => {},
    logout: () => {},
    isLoading: false,
});

function AuthContextProvider({ children }) {
    const [authToken, setAuthToken] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const loadToken = async () => {
            setIsLoading(true);
            try {
                const storedToken = await AsyncStorage.getItem('token');
                if (storedToken) {
                    setAuthToken(storedToken);
                }
            } catch (error) {
                console.error('Failed to load token', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadToken();
    }, []);

    useEffect(() => {
    }, [authToken]);

    const authenticate = async (token) => {
        setIsLoading(true);
        try {
            setAuthToken(token);
            await AsyncStorage.setItem('token', token);  // Save the token
        } catch (error) {
            console.error('Failed to save token', error);
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async () => {
        setIsLoading(true);
        try {
            setAuthToken(null);
            await AsyncStorage.removeItem('token');
        } catch (error) {
            console.error('Failed to remove token', error);
        } finally {
            setIsLoading(false);
        }
    };

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout,
        isLoading: isLoading,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
