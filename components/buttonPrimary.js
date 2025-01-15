import {Text, View} from "react-native";
import {authHome as styles} from "../stylesheet/authentication/auth-home-styles";

function ButtonPrimary(title = '') {
    return (
        <View style={styles.buttonPrimary}>
            <Text style={styles.buttonTextPrimary}>{title}</Text>
        </View>
    )
}

export default ButtonPrimary;
