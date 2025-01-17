import {
    Text, View, Image, KeyboardAvoidingView, TextInput, Pressable, TouchableOpacity, ScrollView, ActivityIndicator
} from "react-native";
import {authenticationStyles} from "../../stylesheet/authentication/authentication-styles";
import images from "../../constants/images";
import {useState} from "react";
import PrimaryButton from "../../components/PrimaryButton";
import stylesheet from "../../stylesheet/stylesheet";
import authService from "../../services/authService";

function RegisterScreen({navigation}) {
    const [formData, setFormData] = useState({
        name: '', username: '', email: '', phone: '', password: '', password_confirmation: '',
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false); // Loading state to show activity indicator
    const [focusedInput, setFocusedInput] = useState(null); // Track which input is focused
    const [passVisibility, setPassVisibility] = useState({
        password: false, confirmPassword: false,
    }); // State to handle password type
    const handleFocus = (inputName) => {
        setFocusedInput(inputName);
    };


    // Function to handle password visibility
    const handlePassVisibility = (field) => {
        setPassVisibility((prevState) => ({
            ...prevState, [field]: !prevState[field], // Toggle the visibility of the specified field
        }));
    }


    // Field-specific validation logic
    const validateField = (name, data) => {
        const errors = {};

        switch (name) {
            case 'name':
                if (!data.name) {
                    errors.name = 'Name is required';
                }
                break;
            case 'email':
                if (!data.email) {
                    errors.email = 'Email is required';
                } else if (!/\S+@\S+\.\S+/.test(data.email)) {
                    errors.email = 'Email address is invalid';
                }
                break;

            case 'username':
                if (!data.username) {
                    errors.username = 'Username is required';
                }
                break;

            case 'password':
                if (!data.password) {
                    errors.password = 'Password is required';
                } else if (data.password.length < 6) {
                    errors.password = 'Password must be at least 6 characters';
                }
                break;
            case 'password_confirmation':
                if (!data.password_confirmation) {
                    errors.password_confirmation = 'Password is required';
                } else if (data.password_confirmation.length < 6) {
                    errors.password_confirmation = 'Password must be at least 6 characters';
                }
                break;
            default:
                break;
        }

        return errors;
    };

    // Overall form validation
    const validate = (data) => {
        const errors = {};

        if (!data.name) {
            errors.name = 'Name is required';
        }
        if (!data.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email address is invalid';
        }
        if (!data.username) {
            errors.username = 'Username is required';
        }
        if (!data.password) {
            errors.password = 'Password is required';
        } else if (data.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }
        if (!data.password_confirmation) {
            errors.password_confirmation = 'Password confirmation is required';
        } else if (data.password_confirmation.length < 6) {
            errors.password_confirmation = 'Password confirmation must be at least 6 characters';
        }

        return errors;
    };


    // Handle input change
    const handleChange = (name, value) => {
        setFormData({...formData, [name]: value});

        // Validate the updated field and get potential errors
        const validationErrors = validateField(name, {...formData, [name]: value});

        // Update errors
        setErrors({...errors, [name]: validationErrors[name] || ''});

    };


    const registerAccount = async () => {

        // Validate form fields
        const validationErrors = validate(formData);

        if (Object.keys(validationErrors).length === 0) {

            try {
                setErrors({}); // Clear previous errors
                setLoading(true); // Start loading

                // Use AuthService to handle registration
                const response = await authService.register({
                    name: formData.name,
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                    password_confirmation: formData.password_confirmation,
                });

                // Handle response based on success or failure
                if (response.success) {
                    console.log(response,'response',errors)
                    // Navigate to another screen after successful registration
                    navigation.navigate('ActivationScreen', {email: formData.email});
                } else {
                    // Set error from AuthService response
                    setErrors({general: response.error});
                }
            } catch (err) {
                // Handle any unexpected errors
                console.error('Registration error:', err);
                setErrors({general: 'Registration failed. Please try again later.'});
            } finally {
                setLoading(false); // Stop loading when request is complete
            }
        } else {
            console.log('123')
            console.log(validationErrors,'v')
            // Set errors if validation fails
            setErrors(validationErrors);
        }
    };


    return (<>
        <KeyboardAvoidingView>

            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={authenticationStyles.authContainer}>
                    <Image style={authenticationStyles.logo} source={images.logo}/>


                    <View style={authenticationStyles.formContent}>
                        <Text style={authenticationStyles.authTitle}>Sign up</Text>
                        {/* Display general errors */}
                        {errors.general && <Text style={[stylesheet.errorTextG, stylesheet.width90,stylesheet.marginBottom20]}>{errors.general}</Text> }

                        <View style={[stylesheet.width90,stylesheet.marginBottom20]}>
                            <TextInput
                                style={[authenticationStyles.authInput, focusedInput === 'name' && authenticationStyles.authInputFocused]}
                                placeholder="Name"
                                placeholderTextColor="#888"
                                value={formData.name}
                                onChangeText={(value) => handleChange('name', value)}
                                autoCapitalize="none"
                                autoCorrect={false}
                                onFocus={() => handleFocus('name')}
                            />
                            {errors.name && <Text style={stylesheet.errorText}>{errors.name}</Text>}
                        </View>
                        <View style={[stylesheet.width90,stylesheet.marginBottom20]}>
                            <TextInput
                                style={[authenticationStyles.authInput, focusedInput === 'username' && authenticationStyles.authInputFocused]}
                                placeholder="Username"
                                placeholderTextColor="#888"
                                value={formData.username}
                                onChangeText={(value) => handleChange('username', value)}
                                autoCapitalize="none"
                                autoCorrect={false}
                                onFocus={() => handleFocus('username')}
                            />
                            {errors.username && <Text style={stylesheet.errorText}>{errors.username}</Text>}

                        </View>

                        <View style={[stylesheet.width90,stylesheet.marginBottom20]}>
                            <TextInput
                                style={[authenticationStyles.authInput, focusedInput === 'email' && authenticationStyles.authInputFocused]}
                                placeholder="Email"
                                placeholderTextColor="#888"
                                keyboardType="email-address"
                                value={formData.email}
                                onChangeText={(value) => handleChange('email', value)}
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
                                    {passVisibility.password ? (
                                        <Image resizeMode={'contain'} style={[authenticationStyles.passIcon]}
                                               source={images.eye}/>) : (
                                        <Image resizeMode={'contain'} style={[authenticationStyles.passIcon]}
                                               source={images.eyeHidden}/>)}
                                </TouchableOpacity>
                            </View>

                            {errors.password && <Text style={stylesheet.errorText}>{errors.password}</Text>}
                        </View>


                        <View style={[stylesheet.width90, stylesheet.positionRelative,stylesheet.marginBottom20]}>
                            <TextInput
                                style={[authenticationStyles.authInput, focusedInput === 'password_confirmation' && authenticationStyles.authInputFocused]}
                                placeholder="Confirm Password"
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
                                    {passVisibility.confirmPassword ? (
                                        <Image resizeMode={'contain'} style={[authenticationStyles.passIcon]}
                                               source={images.eye}/>) : (
                                        <Image resizeMode={'contain'} style={[authenticationStyles.passIcon]}
                                               source={images.eyeHidden}/>)}
                                </TouchableOpacity>
                            </View>

                            {errors.password_confirmation && <Text style={stylesheet.errorText}>{errors.password_confirmation}</Text>}
                        </View>


                        <View style={[stylesheet.width90, stylesheet.marginBottom40]}>
                            <PrimaryButton onPress={() => registerAccount()}>
                                {loading ? (
                                    <ActivityIndicator size="small" color="#fff"/>
                                ) :
                                    'Sign up'
                                }
                                 </PrimaryButton>
                        </View>



                        <View style={[stylesheet.alignItemsCenter]}>
                            <Text style={[stylesheet.marginBottom20, stylesheet.fontSize15]}>Already have an
                                account?</Text>

                            <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                                <Text style={[stylesheet.fontSize15, stylesheet.fontWeight700]}>Login</Text>
                            </Pressable>

                        </View>

                    </View>

                    <View></View>
                </View>

            </ScrollView>


        </KeyboardAvoidingView>
    </>)
}

export default RegisterScreen;
