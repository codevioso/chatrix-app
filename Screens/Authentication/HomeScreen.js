import {Text, View, Image, Pressable} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { authHome as styles} from "../../stylesheet/authentication/auth-home-styles";
import colors from "../../constants/colors";
import images from "../../constants/images";

function HomeScreen() {

    {/*TODO: For colors use camelCase not underscore for example (darkblueVar1 not darkblue_var_1)*/}
    {/*TODO: For Images use camelCase not underscore for example (coverImage1 not cover_image_1)*/}

    return (
        <View style={styles.background}>
           {/*TODO: Create a global component for logo*/}
            <Image style={styles.logo} source={images.logo}></Image>

            {/*TODO: replace homeImage with coverPhoto and homeAuthImage with coverPhoto*/}
            <Image style={styles.homeImage}
                   source={images.homeAuthImage}></Image>

            {/*Background Linear Gradient*/}
            <LinearGradient
                colors={['transparent', colors.darkblue_var_1]}
                style={styles.gradient}
            />

            <View style={styles.card}>
                {/*TODO: Replace title to CardTitle*/}
                <Text style={styles.title}>Chat with your friends</Text>
                {/*TODO: Replace title to CardDescription*/}
                <Text style={styles.description}>
                    Secure communication and collaboration tool, built for you & your friends.
                </Text>

                {/*TODO: Please add a Ripple Effect make sure that it supports in ios also.*/}
                {/*TODO: Create a new component called PrimaryButton.js and use that custom button component here. currently only for primary button*/}
                <Pressable style={styles.buttonPrimary}>
                    <Text style={styles.buttonTextPrimary}>Login</Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.buttonTextSecondary}>Create an Account</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default HomeScreen;
