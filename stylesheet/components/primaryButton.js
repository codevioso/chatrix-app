import { StyleSheet } from 'react-native';
import { PrimaryButtonInterface } from "../stylesInterfaces/primaryButtonInterface";
import colors from "../../constants/colors";

export const primaryButton: PrimaryButtonInterface = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius: 20,
        overflow:'hidden',
    },
    PrimaryButton: {
        backgroundColor: colors.theme,
        paddingVertical: 20,
        paddingHorizontal: 30,
        textAlign: "center",
        alignItems: 'center',
        borderRadius: 20,
    },
    PrimaryButtonText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    Pressed:{
        opacity:0.75
    }
});
