import {
    Text,
    View,
    Image,
    KeyboardAvoidingView,
    TextInput,
    Pressable,
    ActivityIndicator
} from "react-native";
import {authenticationStyles} from "../../stylesheet/authentication/authentication-styles";
import images from "../../constants/images";
import {useState} from "react";
import PrimaryButton from "../../components/PrimaryButton";
import stylesheet from "../../stylesheet/stylesheet";
import authService from "../../services/authService";
import colors from "../../constants/colors";

const ForgotScreen = ({navigation}) => {
    const [formData, setFormData] = useState({
        email: '',
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

    // Simple validation function
    const validate = (data) => {
        const errors = {};


        if (!data.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email address is invalid';
        }

        return errors;
    };


    // Handle form submission
    const forgotPassword = async () => {
        // Validate form fields
        const validationErrors = validate(formData);

        if (Object.keys(validationErrors).length === 0) {
            // No errors, handle form submission logic here
            try {
                setErrors({}); // Clear previous errors
                setLoading(true); // Start loading

                // Use AuthService to handle login
                const response = await authService.forgot({
                    email: formData.email,
                });

                // Handle response based on success or failure
                if (response.success) {
                    navigation.navigate('ResetScreen');
                } else {
                    // Set error from AuthService response
                    setErrors({general: response.error});
                }
            } catch (err) {
                // Handle any unexpected errors
                console.error('Forgot error:', err);
                setErrors({general: 'Submission failed. Please try again later.'});
            } finally {
                setLoading(false); // Stop loading when request is complete
            }
        } else {
            // Set errors if validation fails
            setErrors(validationErrors);
        }
    };

    return (
        <>
            <KeyboardAvoidingView style={authenticationStyles.authContainer}>

                <Image style={authenticationStyles.logo} source={images.logo}/>


                <View style={authenticationStyles.formContent}>
                    <Text style={authenticationStyles.authTitle}>Forgot Password</Text>
                    <View style={[stylesheet.width90,stylesheet.marginBottom20]}>
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
                        {errors.email && <Text style={stylesheet.errorText}>{errors.email}</Text>}
                    </View>

                    <View style={[stylesheet.width90, stylesheet.marginBottom40]}>
                        <PrimaryButton onPress={() => navigation.navigate('ResetScreen')}>
                            {loading ? (
                                <ActivityIndicator size={'small'} color={colors.white}/>
                            ) : 'Submit'}
                        </PrimaryButton>
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
