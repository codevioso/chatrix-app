import HomeScreen from "./Screens/Authentication/HomeScreen";
import LoginScreen from "./Screens/Authentication/Login";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RegisterScreen from "./Screens/Authentication/Register";
import ForgotScreen from "./Screens/Authentication/Forgot";
import ResetScreen from "./Screens/Authentication/Reset";
import ActivationScreen from "./Screens/Authentication/Activation";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator id={"Auth"} initialRouteName={'AuthHomeScreen'}>
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
            </NavigationContainer>
        </>
    );
}
