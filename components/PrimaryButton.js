import {Pressable, Text, View} from "react-native";
import {primaryButton as styles} from "../stylesheet/components/primaryButton";
import colors from "../constants/colors";

function PrimaryButton({ children, onPress }) {
    return (
        <>
        <View style={styles.buttonOuterContainer}>
           <Pressable style={({pressed}) => pressed ? [styles.Pressed, styles.PrimaryButton] :  styles.PrimaryButton} onPress={onPress} android_ripple={{color:colors.themeRippleEffect}}>
                   <Text style={styles.PrimaryButtonText}>{children}</Text>
           </Pressable>
        </View>
        </>
    );
}

export default PrimaryButton;
