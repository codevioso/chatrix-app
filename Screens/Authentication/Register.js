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

function RegisterScreen({navigation}) {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
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

    return (
        <>
            <KeyboardAvoidingView>

                <ScrollView showsHorizontalScrollIndicator={false}>
                    <View style={authenticationStyles.authContainer}>
                        <Image style={authenticationStyles.logo} source={images.logo}/>


                        <View style={authenticationStyles.formContent}>
                            <Text style={authenticationStyles.authTitle}>Sign up</Text>
                            <View style={stylesheet.width90}>
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

                            </View>

                            <View style={[stylesheet.width90, stylesheet.positionRelative]}>
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
                                        {passVisibility ?
                                            (<Image resizeMode={'contain'} style={[authenticationStyles.passIcon]}
                                                    source={images.eye}/>)
                                            :
                                            (<Image resizeMode={'contain'} style={[authenticationStyles.passIcon]}
                                                    source={images.eyeHidden}/>)
                                        }
                                    </TouchableOpacity>
                                </View>
                            </View>


                            <View style={[stylesheet.width90, stylesheet.positionRelative]}>
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
                                        {passVisibility ?
                                            (<Image resizeMode={'contain'} style={[authenticationStyles.passIcon]}
                                                    source={images.eye}/>)
                                            :
                                            (<Image resizeMode={'contain'} style={[authenticationStyles.passIcon]}
                                                    source={images.eyeHidden}/>)
                                        }
                                    </TouchableOpacity>
                                </View>
                            </View>


                            <View style={[stylesheet.width90, stylesheet.marginBottom40]}>
                                <PrimaryButton>Sign up</PrimaryButton>
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
        </>
    )
}

export default RegisterScreen;
