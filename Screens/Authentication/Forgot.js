import {Text, View, Image, KeyboardAvoidingView, TextInput, Pressable, TouchableOpacity} from "react-native";
import {authenticationStyles} from "../../stylesheet/authentication/authentication-styles";
import images from "../../constants/images";
import {useState} from "react";
import PrimaryButton from "../../components/PrimaryButton";
import stylesheet from "../../stylesheet/stylesheet";

const ForgotScreen = ({navigation}) => {
    const [formData, setFormData] = useState({
        email: '',
    });
    const [focusedInput, setFocusedInput] = useState(null); // Track which input is focused
    const handleFocus = (inputName) => {
        setFocusedInput(inputName);
    };

    // Handle input change
    const handleChange = (name, value) => {
        setFormData({...formData, [name]: value});
    };



    return (
        <>
            <KeyboardAvoidingView style={authenticationStyles.authContainer}>

                <Image style={authenticationStyles.logo} source={images.logo}/>


                <View style={authenticationStyles.formContent}>
                    <Text style={authenticationStyles.authTitle}>Forgot Password</Text>
                    <View style={stylesheet.width90}>
                        <TextInput
                            style={[authenticationStyles.authInput, focusedInput === 'email' && authenticationStyles.authInputFocused]}
                            placeholder="Email"
                            placeholderTextColor="#888"
                            keyboardType="email-address"
                            value={formData.email}
                            onChangeText={(value) => handleChange('email',value)}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onFocus={() => handleFocus('email')}
                        />
                    </View>


                    <View style={[stylesheet.width90, stylesheet.marginBottom40]}>
                        <PrimaryButton onPress={() => navigation.navigate('ResetScreen')}>Submit</PrimaryButton>
                    </View>

                    <View style={[stylesheet.alignItemsCenter]}>
                        <Text style={[stylesheet.marginBottom20, stylesheet.fontSize15]}>Remember your password?</Text>

                        <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                            <Text style={[stylesheet.fontSize15, stylesheet.fontWeight700]}>Log in</Text>
                        </Pressable>

                    </View>

                </View>

                <View></View>


            </KeyboardAvoidingView>
        </>
    )
}

export default ForgotScreen;
