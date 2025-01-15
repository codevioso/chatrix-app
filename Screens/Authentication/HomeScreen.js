import {Text, View, Image, Pressable, TouchableNativeFeedback, TouchableOpacity, Platform} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {authHome as styles} from "../../stylesheet/authentication/auth-home-styles";
import colors from "../../constants/colors";
import images from "../../constants/images";

function HomeScreen() {

    return (
        <View style={styles.background}>
            <Image style={styles.logo} source={images.logo}></Image>

            <Image style={styles.homeAuthCover}
                   source={images.homeAuthCover}></Image>

            {/*Background Linear Gradient*/}
            <LinearGradient
                colors={['transparent', colors.darkblueVar1]}
                style={styles.gradient}
            />

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Chat with your friends</Text>
                <Text style={styles.cardDescription}>
                    Secure communication and collaboration tool, built for you & your friends.
                </Text>

                {/*TODO: Please add a Ripple Effect make sure that it supports in ios also.*/}
                {/*TODO: Create a new component called PrimaryButton.js and use that custom button component here. currently only for primary button*/}
                <Pressable style={styles.buttonPrimary}>
                    <Text style={styles.buttonTextPrimary}>Login</Text>
                </Pressable>
                <Pressable
                    onPress={() => console.log('Create an Account pressed')}
                    android_ripple={{color: '#d3d3d3', borderless: false,radius:10}}
                    style={styles.buttonTextSecondary}
                >
                    <Text style={styles.buttonTextSecondary}>Create an Account</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default HomeScreen;
