import HomeScreen from "./Screens/Authentication/HomeScreen";
import LoginScreen from "./Screens/Authentication/Login";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <>
          <NavigationContainer>
              <Stack.Navigator id={"Auth"}>
                  <Stack.Screen name={'AuthHomeScreen'} component={HomeScreen} options={{
                      headerShown: false,
                  }} />
                  <Stack.Screen name={'LoginScreen'} component={LoginScreen} options={{
                      headerShown: false,
                  }} />
              </Stack.Navigator>
          </NavigationContainer>
      </>
  );
}
