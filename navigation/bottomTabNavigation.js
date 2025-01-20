import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from "react-native";
import DashboardScreen from "../Screens/Pages/Dashboard/Dashboard";
import images from "../constants/images";
import stylesheet from "../stylesheet/stylesheet";
import Header from "../Screens/Pages/Layout/Shared/Header";
import NotificationScreen from "../Screens/Pages/Notification/NotificationScreen";
import TeamScreen from "../Screens/Pages/Team/TeamScreen";
import InviteScreen from "../Screens/Pages/Invite/InviteScreen";
import tabStyles from "../stylesheet/components/tabStyles";

const Tab = createBottomTabNavigator();

function BottomTabNavigation(props) {
    return (
        <Tab.Navigator
            initialRouteName="DashboardScreen"
            screenOptions={({route}) => ({
                tabBarIcon: ({focused}) => {
                    let icon;
                    if (route.name === 'DashboardScreen') {
                        icon = focused ? images.home : images.home;
                    } else if (route.name === 'TeamScreen') {
                        icon = focused ? images.chatBubble : images.chatBubble;
                    } else if (route.name === 'InviteScreen') {
                        icon = focused ? images.invite : images.invite;
                    }
                    return <Image style={{width:24,height:24,}} source={icon}/>;
                },
                tabBarShowLabel: false,
                tabBarStyle: tabStyles.tabBarStyle,
            })}>

            <Tab.Screen name={'TeamScreen'} component={TeamScreen}
                        options={{header: (props) => <Header {...props} />,}}/>

            <Tab.Screen name={'DashboardScreen'} component={DashboardScreen}
                        options={{header: (props) => <Header {...props} />,}}/>


            <Tab.Screen name={'InviteScreen'} component={InviteScreen}
                        options={{header: (props) => <Header {...props} />,}}/>


        </Tab.Navigator>


    );
}

export default BottomTabNavigation;


