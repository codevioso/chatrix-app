import {Text, View, Image, Pressable} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import authHomeStyles from "../../stylesheet/authentication/auth-home-styles";
import colors from "../../constants/colors";
import images from "../../constants/images";

function HomeScreen() {

    return (
        <View style={authHomeStyles.background}>
            <Image style={authHomeStyles.logo} source={images.logo}></Image>
            <Image style={authHomeStyles.homeImage}
                   source={images.homeAuthImage}></Image>

            <LinearGradient
                // Background Linear Gradient
                colors={['transparent', colors.darkblue_var_1]}
                style={authHomeStyles.gradient}
            />

            <View style={authHomeStyles.card}>
                <Text style={authHomeStyles.title}>Chat with your friends</Text>
                <Text style={authHomeStyles.description}>
                    Secure communication and collaboration tool, built for you & your friends.
                </Text>
                <Pressable style={authHomeStyles.buttonPrimary}>
                    <Text style={authHomeStyles.buttonTextPrimary}>Login</Text>
                </Pressable>
                <Pressable>
                    <Text style={authHomeStyles.buttonTextSecondary}>Create an Account</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default HomeScreen;
