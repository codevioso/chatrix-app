import {StyleSheet} from "react-native";
import {AuthenticationInterface} from "../stylesInterfaces/auth-interface";
import colors from "../../constants/colors";
import stylesheet from "../stylesheet";

export const authenticationStyles: AuthenticationInterface = StyleSheet.create({
    authContainer: {
        padding:20,
        display:"flex",
        alignItems:"center",
        justifyContent:'space-between',
        height:'100%',
    },
    logo:{
        width:200,
        height:120,
        marginBottom:30,
        marginTop:40,
        alignItems:'center',
        position:"relative",
    },
    authTitle:{
      marginBottom:40,
        fontSize:20,
        fontWeight:'bold'
    },
    authInput: {
        // width: '90%',
        backgroundColor: colors.white,
        borderRadius: 15,
        padding: 20,
        fontSize: 16,
        color: colors.blackVar1,
        marginBottom: 20,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 3,
        outline:'none',
        borderWidth:1,
        borderColor:'transparent',
    },
    authInputFocused:{
        borderWidth: 1, // Add border on focus
        borderColor: '#d3d3d3', // Light gray border color
        transitionProperty:'ease',
        transitionDuration:'.3s'
    },
    formContent:{
        width:'100%',
        alignItems:"center",
        transitionProperty:'ease',
        transitionDuration:'.3s'
    },

    passIconWrap: {
        position: 'absolute',
        top: 23,
        right: 20,
        zIndex:999

    },
    passIcon: {
        width: 20,
        height: 20,
        cursor: 'pointer',
    },
    forgotContainer:{
        alignSelf:'flex-end',
        marginBottom:20,
        marginRight:30,
    }

})
