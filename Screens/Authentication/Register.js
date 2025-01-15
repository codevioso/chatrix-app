import {Text, View, Image, KeyboardAvoidingView, TextInput, Pressable, TouchableOpacity} from "react-native";
import {authenticationStyles} from "../../stylesheet/authentication/authentication-styles";
import images from "../../constants/images";
import {useState} from "react";
import PrimaryButton from "../../components/PrimaryButton";
import stylesheet from "../../stylesheet/stylesheet";
function RegisterScreen(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: '',
    });
    const [focusedInput, setFocusedInput] = useState(null); // Track which input is focused
    const [passVisibility, setPassVisibility] = useState(false); // State to handle password type
    const handleFocus = (inputName) => {
        setFocusedInput(inputName);
    };

    // Handle input change
    const handleChangeInputType = (name, value) => {
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
                        style={[authenticationStyles.authInput,focusedInput === 'email' && authenticationStyles.authInputFocused]}
                        placeholder="Email"
                        placeholderTextColor="#888"
                        keyboardType="email-address"
                        value={formData.email}
                        onChangeText={formData.email}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onFocus={() => handleFocus('email')}
                    />
                </View>



               <View style={[stylesheet.width90,stylesheet.positionRelative]}>
                   <TextInput
                       style={[authenticationStyles.authInput,focusedInput === 'password' && authenticationStyles.authInputFocused]}
                       placeholder="Password"
                       placeholderTextColor="#888"
                       secureTextEntry={!passVisibility}
                       value={formData.password}
                       onChangeText={(value) => handleChangeInputType('password', value)}
                       autoCapitalize="none"
                       autoCorrect={false}
                       onFocus={() => handleFocus('password')}
                   />

                   {/*Pass icon*/}
                   <View style={[authenticationStyles.passIconWrap]}>
                       <TouchableOpacity onPress={() => handlePassVisibility()}>
                           {passVisibility ?
                               (<Image resizeMode={'contain'} style={[authenticationStyles.passIcon]} source={images.eye}/>)
                               :
                               (<Image resizeMode={'contain'} style={[authenticationStyles.passIcon]} source={images.eyeHidden}/>)
                           }
                       </TouchableOpacity>
                   </View>
               </View>


                 <View style={[stylesheet.width90,stylesheet.marginBottom40]}>
                     <PrimaryButton>Login</PrimaryButton>
                 </View>

                   <View style={[stylesheet.alignItemsCenter]}>
                       <Text style={[stylesheet.marginBottom20,stylesheet.fontSize15]}>Don't have an account?</Text>

                       <Pressable>
                           <Text style={[stylesheet.fontSize15,stylesheet.fontWeight700]}>Register</Text>
                       </Pressable>

                   </View>

               </View>

               <View></View>



           </KeyboardAvoidingView>
       </>
   )
}

export default RegisterScreen;
