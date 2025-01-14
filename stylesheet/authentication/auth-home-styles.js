import {StyleSheet} from "react-native";
import colors from "../../constants/colors";
import {TextStyle} from "react-native";
import {ViewStyle} from "react-native";
import {ImageStyle} from "react-native";
type AuthHomeStyles = {
    background: ViewStyle;
    homeImage: ImageStyle;
    logo: ImageStyle;
    card: ViewStyle;
    gradient: ViewStyle;
    title: TextStyle; // Ensure this aligns with `<Text>` usage
    description: TextStyle;
    buttonPrimary: ViewStyle;
    buttonTextPrimary: ViewStyle;
    buttonTextSecondary: ViewStyle;
};

const authHomeStyles: AuthHomeStyles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    homeImage:{
        width:460,
        height:300,
        alignItems:'center'

    },

    logo:{
        width:200,
        height:120,
        marginBottom:30,
        marginTop:40,
        alignItems:'center'
    },
    card: {
        padding: 10,
        width: '90%',
        position: "relative",
        marginBottom: 50,

    },

    gradient: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 700,
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        lineHeight: 70,
        color: colors.light_var_1,
        textAlign: 'left',
        marginBottom: 20,
    },
    description: {
        fontSize: 18,
        color: colors.light_var_1,
        textAlign: 'left',
        marginBottom: 40,
    },
    buttonPrimary: {
        backgroundColor: colors.theme,
        paddingVertical: 20,
        paddingHorizontal: 30,
        textAlign: "center",
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 25,
    },
    buttonTextPrimary: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        cursor:"pointer",
    },
    buttonTextSecondary: {
        textAlign: 'center',
        color: colors.light_var_1,
        fontSize: 18,
        marginHorizontal: 20,
        fontWeight: 'bold',
        cursor:"pointer",
    },
})

export default authHomeStyles;
