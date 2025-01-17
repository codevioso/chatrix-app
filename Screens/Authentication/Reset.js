import {
    Text,
    View,
    Image,
    KeyboardAvoidingView,
    TextInput,
    Pressable,
    TouchableOpacity,
    ScrollView
} from "react-native";
import {authenticationStyles} from "../../stylesheet/authentication/authentication-styles";
import images from "../../constants/images";
import {useState} from "react";
import PrimaryButton from "../../components/PrimaryButton";
import stylesheet from "../../stylesheet/stylesheet";
import authService from "../../services/authService";
import Toast from "react-native-toast-message";

const ResetScreen = ({route,navigation}) => {
    const [loading, setLoading] = useState(false); // State to track loading status
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        email: route.params.email,
        reset_code: '',
        password: '',
        password_confirmation: '',
    });
    const [focusedInput, setFocusedInput] = useState(null); // Track which input is focused
    const [passVisibility, setPassVisibility] = useState({
        password: false,
        confirmPassword: false,
    }); // State to handle password type
    const handleFocus = (inputName) => {
        setFocusedInput(inputName);
    };

    // Handle input change
    const handleChange = (name, value) => {
        setFormData({...formData, [name]: value});
    };

    // Function to handle password visibility
    const handlePassVisibility = (field) => {
        setPassVisibility((prevState) => ({
            ...prevState,
            [field]: !prevState[field], // Toggle the visibility of the specified field
        }));
    }

    // Handle form submission
    const resetPassword = async () => {
        // Validate form fields
        const validationErrors = validate(formData);

        if (Object.keys(validationErrors).length === 0) {
            try {
                setErrors({}); // Clear previous errors
                setLoading(true); // Start loading

                // Use AuthService to handle reset password request
                const response = await authService.reset({
                    email: formData.email,
                    reset_code: formData.reset_code,
                    password: formData.password,
                    password_confirmation: formData.password_confirmation,
                });

                if (response.success) {
                    Toast.show({
                        type: 'success',
                        text1: 'Password reset Successfully!',
                        text2: 'The password has been changed successfully!',
                    })
                    setTimeout(() => {
                        navigation.navigate('LoginScreen', {email: formData.email});
                    },1000)
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

        if (!data.reset_code) {
            errors.reset_code = 'Reset code is required';
        }

        if (!data.password) {
            errors.password = 'Password is required';
        } else if (data.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }

        if (data.password !== data.password_confirmation) {
            errors.password_confirmation = 'Passwords doesn\'t not match';
        }

        return errors;
    };


    return (
        <>
            <KeyboardAvoidingView >

                <Toast/>
                <View style={authenticationStyles.authContainer}>

                    <Image style={authenticationStyles.logo} source={images.logo}/>


                    <View style={authenticationStyles.formContent}>
                        <Text style={authenticationStyles.authTitle}>Reset Password</Text>

                        <View style={[stylesheet.alertSuccess, stylesheet.width90, stylesheet.marginBottom25]}>
                            <Text style={[stylesheet.alertSuccessText, stylesheet.fontSize15, stylesheet.textCenter]}>A six-digit reset code has been sent to your email address</Text>
                        </View>

                        {/* Display general errors */}
                        {errors.general && <Text style={[stylesheet.errorTextG, stylesheet.width90,stylesheet.marginBottom20]}>{errors.general}</Text> }

                        <View style={[stylesheet.width90,stylesheet.marginBottom20]}>
                            <TextInput
                                style={[authenticationStyles.authInput, focusedInput === 'reset_code' && authenticationStyles.authInputFocused]}
                                placeholder="Reset Code"
                                placeholderTextColor="#888"
                                keyboardType='numeric'
                                value={formData.reset_code}
                                onChangeText={(value) => handleChange('reset_code', value.replace(/[^0-9]/g, ''))}
                                autoCapitalize="none"
                                autoCorrect={false}
                                onFocus={() => handleFocus('reset_code')}
                            />
                            {errors.reset_code && <Text style={stylesheet.errorText}>{errors.reset_code}</Text>}
                        </View>


                        <View style={[stylesheet.width90,stylesheet.marginBottom20, stylesheet.positionRelative]}>
                            <TextInput
                                style={[authenticationStyles.authInput, focusedInput === 'password' && authenticationStyles.authInputFocused]}
                                placeholder="New Password"
                                placeholderTextColor="#888"
                                secureTextEntry={!passVisibility.password}
                                value={formData.password}
                                onChangeText={(value) => handleChange('password', value)}
                                autoCapitalize="none"
                                autoCorrect={false}
                                onFocus={() => handleFocus('password')}
                            />

                            {/*Pass icon*/}
                            <View style={[authenticationStyles.passIconWrap]}>
                                <TouchableOpacity onPress={() => handlePassVisibility('password')}>
                                    {passVisibility.password ?
                                        (<Image resizeMode={'contain'} style={[authenticationStyles.passIcon]}
                                                source={images.eye}/>)
                                        :
                                        (<Image resizeMode={'contain'} style={[authenticationStyles.passIcon]}
                                                source={images.eyeHidden}/>)
                                    }
                                </TouchableOpacity>
                            </View>

                            {errors.password && <Text style={stylesheet.errorText}>{errors.password}</Text>}
                        </View>


                        <View style={[stylesheet.width90,stylesheet.marginBottom20, stylesheet.positionRelative]}>
                            <TextInput
                                style={[authenticationStyles.authInput, focusedInput === 'password_confirmation' && authenticationStyles.authInputFocused]}
                                placeholder="Confirm New Password"
                                placeholderTextColor="#888"
                                secureTextEntry={!passVisibility.confirmPassword}
                                value={formData.password_confirmation}
                                onChangeText={(value) => handleChange('password_confirmation', value)}
                                autoCapitalize="none"
                                autoCorrect={false}
                                onFocus={() => handleFocus('password_confirmation')}
                            />

                            {/*Pass icon*/}
                            <View style={[authenticationStyles.passIconWrap]}>
                                <TouchableOpacity onPress={() => handlePassVisibility('confirmPassword')}>
                                    {passVisibility.confirmPassword ?
                                        (<Image resizeMode={'contain'} style={[authenticationStyles.passIcon]}
                                                source={images.eye}/>)
                                        :
                                        (<Image resizeMode={'contain'} style={[authenticationStyles.passIcon]}
                                                source={images.eyeHidden}/>)
                                    }
                                </TouchableOpacity>
                            </View>

                            {errors.password_confirmation && <Text style={stylesheet.errorText}>{errors.password_confirmation}</Text>}
                        </View>


                        <View style={[stylesheet.width90, stylesheet.marginBottom30]}>
                            <PrimaryButton onPress={resetPassword}>Submit</PrimaryButton>
                        </View>


                        <View style={[stylesheet.alignItemsCenter]}>
                            <Text style={[stylesheet.marginBottom20, stylesheet.fontSize15]}>Remember your password?</Text>

                            <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                                <Text style={[stylesheet.fontSize15, stylesheet.fontWeight700]}>Login</Text>
                            </Pressable>

                        </View>

                    </View>

                    <View></View>
                </View>


            </KeyboardAvoidingView>
        </>
    )
}

export default ResetScreen;
