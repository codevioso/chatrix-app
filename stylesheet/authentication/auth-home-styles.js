import {StyleSheet} from "react-native";
import colors from "../../constants/colors";
import  {HomepageInterface} from "../stylesInterfaces/auth-interface";

export const authHome: HomepageInterface = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        height:100 + '%',
        width:100 + '%',
    },
    homeAuthImage:{
        alignItems:'center',
        position:"absolute",
        top:0,
        left:0,
        zIndex:0,
        height: "100%",
        width: "100%",
        resizeMode: "contain",
    },

    logo:{
        width:200,
        height:120,
        marginBottom:30,
        marginTop:40,
        alignItems:'center',
        position:"relative",
        zIndex:1,
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
        height: "100%",
        width: "100%",
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

