import {
    Text,
    View,
    Image,
    KeyboardAvoidingView,
    TextInput,
    Pressable,
    TouchableOpacity,
    ActivityIndicator
} from "react-native";
import {authenticationStyles} from "../../stylesheet/authentication/authentication-styles";
import images from "../../constants/images";
import {useState} from "react";
import PrimaryButton from "../../components/PrimaryButton";
import stylesheet from "../../stylesheet/stylesheet";
import authService from "../../services/authService";
import colors from "../../constants/colors";

const LoginScreen = ({navigation}) => {
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false); // State to track loading status
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [focusedInput, setFocusedInput] = useState(null); // Track which input is focused
    const [passVisibility, setPassVisibility] = useState(false); // State to handle password type
    const handleFocus = (inputName) => {
        setFocusedInput(inputName);
    };

    // Handle input change
    const handleChange = (name, value) => {
        setFormData({...formData, [name]: value});
    };

    // Function to handle password visibility
    const handlePassVisibility = () => setPassVisibility(prev => !prev);



    // Simple validation function
    const validate = (data) => {
        const errors = {};


        if (!data.email) {
            errors.email = ['Email is required'];
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = ['Email address is invalid'];
        }

        if (!data.password) {
            errors.password = ['Password is required'];
        } else if (data.password.length < 6) {
            errors.password = ['Password must be at least 6 characters'];
        }

        return errors;
    };


    // Handle form submission
    const login = async () => {
        // Validate form fields
        const validationErrors = validate(formData);

        if (Object.keys(validationErrors).length === 0) {
            // No errors, handle form submission logic here
            try {
                setErrors({}); // Clear previous errors
                setLoading(true); // Start loading

                // Use AuthService to handle login
                const response = await authService.login({
                    email: formData.email,
                    password: formData.password,
                });

                // Handle response based on success or failure
                if (response.success) {
                    // Navigate to another screen after successful login
               /*     await login(response.data.data);
                    navigation.navigate('Tabs');*/
                } else {
                    // Set error from AuthService response
                    setErrors({general: response.error});
                }
            } catch (err) {
                // Handle any unexpected errors
                console.error('Login error:', err);
                setErrors({general: 'Login failed. Please try again later.'});
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
                    <Text style={authenticationStyles.authTitle}>Login</Text>
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


                    <View style={[stylesheet.width90, stylesheet.positionRelative,stylesheet.marginBottom20]}>
                        <TextInput
                            style={[authenticationStyles.authInput, focusedInput === 'password' && authenticationStyles.authInputFocused]}
                            placeholder="Password"
                            placeholderTextColor="#888"
                            secureTextEntry={!passVisibility}
                            value={formData.password}
                            onChangeText={(value) => handleChange('password', value)}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onFocus={() => handleFocus('password')}
                        />

                        {/*Pass icon*/}
                        <View style={[authenticationStyles.passIconWrap]}>
                            <TouchableOpacity onPress={() => handlePassVisibility()}>
                                {passVisibility ?
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

                    <View style={authenticationStyles.forgotContainer}>
                        <Text style={[stylesheet.fontSize15]}  onPress={() => navigation.navigate('ForgotScreen')}>
                            forgot your password?
                        </Text>
                    </View>

                    <View style={[stylesheet.width90, stylesheet.marginBottom30]}>
                        <PrimaryButton onPress={login}>
                            {loading ? (
                                <ActivityIndicator size={'small'} color={colors.white}/>
                            ) : ('Login')}
                        </PrimaryButton>
                    </View>



                    <View style={[stylesheet.alignItemsCenter]}>
                        <Text style={[stylesheet.marginBottom20, stylesheet.fontSize15]}>Don't have an account?</Text>

                        <Pressable onPress={() => navigation.navigate('RegisterScreen')}>
                            <Text style={[stylesheet.fontSize15, stylesheet.fontWeight700]}>Sign up</Text>
                        </Pressable>


                    </View>

                </View>

                <View></View>


            </KeyboardAvoidingView>
        </>
    )
}

export default LoginScreen;
