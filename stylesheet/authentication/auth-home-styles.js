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
        backgroundColor:colors.white
    },
    homeAuthCover:{
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
        height: "60%",
        width: "100%",
    },
    cardTitle: {
        fontSize: 50,
        fontWeight: 'bold',
        lineHeight: 70,
        color: colors.lightVar1,
        textAlign: 'left',
        marginBottom: 20,
    },
    cardDescription: {
        fontSize: 18,
        color: colors.lightVar1,
        textAlign: 'left',
        marginBottom: 40,
    },
    buttonTextSecondary: {
        marginTop:20,
        textAlign: 'center',
        color: colors.lightVar1,
        fontSize: 18,
        marginHorizontal: 20,
        fontWeight: 'bold',
        cursor:"pointer",
    },
})

