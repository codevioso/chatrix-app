import HomeScreen from "./Screens/Authentication/HomeScreen";
import LoginScreen from "./Screens/Authentication/Login";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RegisterScreen from "./Screens/Authentication/Register";
import ForgotScreen from "./Screens/Authentication/Forgot";
import ResetScreen from "./Screens/Authentication/Reset";
import ActivationScreen from "./Screens/Authentication/Activation";
import AuthContextProvider, {AuthContext} from "./store/auth-context";
import DashboardScreen from "./Screens/Pages/Dashboard/Dashboard";
import {useContext, useEffect} from "react";

const Stack = createNativeStackNavigator();


function AuthenticatedStack(){
    return (
        <Stack.Navigator id={"AuthenticatedStack"} initialRouteName={'DashboardScreen'}>
            <Stack.Screen name={'DashboardScreen'} component={DashboardScreen}></Stack.Screen>
        </Stack.Navigator>
    );
}


function AuthStack(){
    return (
        <Stack.Navigator id={"AuthStack"} initialRouteName={'AuthHomeScreen'}>
            <Stack.Screen name={'AuthHomeScreen'} component={HomeScreen} options={{
                headerShown: false,
            }}/>
            <Stack.Screen name={'LoginScreen'} component={LoginScreen} options={{
                headerShown: false,
            }}/>
            <Stack.Screen name={'RegisterScreen'} component={RegisterScreen} options={{
                headerShown: false,
            }}/>
            <Stack.Screen name={'ForgotScreen'} component={ForgotScreen} options={{
                headerShown: false,
            }}/>
            <Stack.Screen name={'ResetScreen'} component={ResetScreen} options={{
                headerShown: false,
            }}/>
            <Stack.Screen name={'ActivationScreen'}  component={ActivationScreen} options={{
                headerShown: false,
            }}/>
        </Stack.Navigator>
    );
}

function Navigator() {
    const authCtx = useContext(AuthContext);

    useEffect(() => {
        console.log("Authentication status changed:", authCtx.isAuthenticated);
    }, [authCtx.isAuthenticated]);

    return (
        !authCtx.isAuthenticated ? <AuthStack /> : <AuthenticatedStack />
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <AuthContextProvider>
                <Navigator />
            </AuthContextProvider>
        </NavigationContainer>
    );
}
