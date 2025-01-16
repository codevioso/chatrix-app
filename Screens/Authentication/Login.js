import {Text, View, Image, KeyboardAvoidingView, TextInput, Pressable, TouchableOpacity} from "react-native";
import {authenticationStyles} from "../../stylesheet/authentication/authentication-styles";
import images from "../../constants/images";
import {useState} from "react";
import PrimaryButton from "../../components/PrimaryButton";
import stylesheet from "../../stylesheet/stylesheet";

const LoginScreen = ({navigation}) => {
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


    return (
        <>
            <KeyboardAvoidingView style={authenticationStyles.authContainer}>

                <Image style={authenticationStyles.logo} source={images.logo}/>


                <View style={authenticationStyles.formContent}>
                    <Text style={authenticationStyles.authTitle}>Login</Text>
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


                    <View style={[stylesheet.width90, stylesheet.positionRelative]}>
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
                    </View>

                    <View style={authenticationStyles.forgotContainer}>
                        <Text style={[stylesheet.fontSize15]}  onPress={() => navigation.navigate('ForgotScreen')}>
                            forgot your password?
                        </Text>
                    </View>

                    <View style={[stylesheet.width90, stylesheet.marginBottom30]}>
                        <PrimaryButton>Login</PrimaryButton>
                    </View>



                    <View style={[stylesheet.alignItemsCenter]}>
                        <Text style={[stylesheet.marginBottom20, stylesheet.fontSize15]}>Don't have an account?</Text>

                        <Pressable onPress={() => navigation.navigate('RegisterScreen')}>
                            <Text style={[stylesheet.fontSize15, stylesheet.fontWeight700]}>Sign up</Text>
                        </Pressable>

                        <Pressable onPress={() => navigation.navigate('ActivationScreen')}>
                            <Text style={[stylesheet.fontSize15, stylesheet.fontWeight700]}>Activation</Text>
                        </Pressable>

                    </View>

                </View>

                <View></View>


            </KeyboardAvoidingView>
        </>
    )
}

export default LoginScreen;
