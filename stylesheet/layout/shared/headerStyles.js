import {StyleSheet} from "react-native";
import colors from "../../../constants/colors";

const headerStyles = StyleSheet.create({
    header: {
        paddingTop: 50,
        backgroundColor: colors.theme,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: colors.lightVar1,
    }
})

export default headerStyles;
