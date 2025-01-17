import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: () => {},
    logout: () => {}
});

function AuthContextProvider({ children }) {
    const [authToken, setAuthToken] = useState('');

    useEffect(() => {
        const loadToken = async () => {
            try {
                const storedToken = await AsyncStorage.getItem('token');
                if (storedToken) {
                    setAuthToken(storedToken);
                }
            } catch (error) {
                console.error('Failed to load token', error);
            }
        };

        loadToken();
    }, []);

    const authenticate = async (token) => {
        try {
            setAuthToken(token);
            await AsyncStorage.setItem('token', token);
        } catch (error) {
            console.error('Failed to save token', error);
        }
    };

    const logout = async () => {
        try {
            setAuthToken('');
            await AsyncStorage.removeItem('token');
        } catch (error) {
            console.error('Failed to remove token', error);
        }
    };

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


export default AuthContextProvider;
