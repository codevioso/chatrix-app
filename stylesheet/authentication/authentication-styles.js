import {StyleSheet} from "react-native";
import {AuthenticationInterface} from "../stylesInterfaces/auth-interface";

export const authenticationStyles: AuthenticationInterface = StyleSheet.create({
    authContainer: {
        padding:20,
        display:"flex",
        alignItems:"center"
    },
    logo:{
        width:200,
        height:120,
        marginBottom:30,
        marginTop:40,
        alignItems:'center',
        position:"relative",
    },
    authInput: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        fontSize: 16,
        color: '#333',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 3,
    },

})
