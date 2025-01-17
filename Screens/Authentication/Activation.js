import {Text, View, Image, KeyboardAvoidingView, TextInput, Pressable, TouchableOpacity} from "react-native";
import {authenticationStyles} from "../../stylesheet/authentication/authentication-styles";
import images from "../../constants/images";
import {useState} from "react";
import PrimaryButton from "../../components/PrimaryButton";
import stylesheet from "../../stylesheet/stylesheet";
import authService from "../../services/authService";

const ActivationScreen = ({navigation}) => {
    const [formData, setFormData] = useState({
        username: 'ridwan5',
        activation_code: '',
    });
    const [loading, setLoading] = useState(false); // State to track loading status
    const [errors, setErrors] = useState({});
    const [focusedInput, setFocusedInput] = useState(null); // Track which input is focused
    const handleFocus = (inputName) => {
        setFocusedInput(inputName);
    };

    // Handle input change
    const handleChange = (name, value) => {
        setFormData({...formData, [name]: value});
    };

    // Handle form submission
    const activeAccount = async () => {
        // Validate form fields
        const validationErrors = validate(formData);

        if (Object.keys(validationErrors).length === 0) {
            try {
                setErrors({}); // Clear previous errors
                setLoading(true); // Start loading

                const response = await authService.accountActivation({
                    username: formData.username,
                    password: formData.activation_code,
                });

                if (response.success) {

                } else {

                    setErrors({ general: response.error });
                }
            } catch (err) {
                console.error('Error:', err);
                setErrors({ general: 'Request failed. Please try again later.' });
            } finally {
                setLoading(false); // Stop loading when request is complete
            }
        } else {
            setErrors(validationErrors);
        }
    };



    // Simple validation function
    const validate = (data) => {
        const errors = {};

        if (!data.username) {
            errors.username = 'Username is required';
        }

        if (!data.activation_code) {
            errors.activation_code = 'Activation code is required';
        } else if (data.activation_code.length < 6) {
            errors.activation_code = 'Activation code must be at least 6 characters';
        }

        return errors;
    };


    return (
        <>
            <KeyboardAvoidingView style={authenticationStyles.authContainer}>

                <Image style={authenticationStyles.logo} source={images.logo}/>


                <View style={authenticationStyles.formContent}>
                    <Text style={authenticationStyles.authTitle}>Account Activation</Text>

                    <View style={[stylesheet.alertSuccess, stylesheet.width90, stylesheet.marginBottom25]}>
                        <Text style={[stylesheet.alertSuccessText, stylesheet.fontSize15, stylesheet.textCenter]}>
                            An activation code has been sent to your registered email address.
                            Please check your inbox (and spam/junk folder if necessary) to complete the activation
                            process.</Text>
                    </View>

                    <View style={stylesheet.width90}>
                        <TextInput
                            style={[authenticationStyles.authInput, focusedInput === 'activation_code' && authenticationStyles.authInputFocused]}
                            placeholder="Activation Code"
                            placeholderTextColor="#888"
                            keyboardType="numeric"
                            value={formData.activation_code}
                            onChangeText={(value) => handleChange('activation_code', value.replace(/[^0-9]/g, ''))}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onFocus={() => handleFocus('activation_code')}
                        />

                        {errors.activation_code && <Text style={stylesheet.errorText}>{errors.activation_code}</Text>}
                    </View>


                    <View style={[stylesheet.width90, stylesheet.marginBottom40]}>
                        <PrimaryButton onPress={activeAccount}>Activate
                            Account</PrimaryButton>
                    </View>

                    <View style={[stylesheet.alignItemsCenter]}>
                        <Text style={[stylesheet.marginBottom20, stylesheet.fontSize15]}>Didn't receive any code?</Text>

                        <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                            <Text style={[stylesheet.fontSize15, stylesheet.fontWeight700]}>Resend code</Text>
                        </Pressable>

                    </View>

                </View>

                <View></View>


            </KeyboardAvoidingView>
        </>
    )
}

export default ActivationScreen;
