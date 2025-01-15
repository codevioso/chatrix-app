import {Text, View, Image, KeyboardAvoidingView, TextInput, Pressable} from "react-native";
import {authenticationStyles} from "../../stylesheet/authentication/authentication-styles";
import images from "../../constants/images";
import {useState} from "react";
import {authHome as styles} from "../../stylesheet/authentication/auth-home-styles";
function LoginScreen(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   return (
       <>
           <KeyboardAvoidingView style={authenticationStyles.authContainer}>

               <Image style={authenticationStyles.logo} source={images.logo}/>

               <TextInput
                   style={authenticationStyles.authInput}
                   placeholder="Email"
                   placeholderTextColor="#888"
                   keyboardType="email-address"
                   value={email}
                   onChangeText={setEmail}
                   autoCapitalize="none"
               />

               <TextInput
                   style={authenticationStyles.authInput}
                   placeholder="Password"
                   placeholderTextColor="#888"
                   secureTextEntry
                   value={password}
                   onChangeText={setPassword}
                   autoCapitalize="none"
               />

               <Pressable style={styles.buttonPrimary} title={'Login'} onPress={() => console.log('Login clicked')}>
                   <Text style={styles.buttonTextPrimary}>Login</Text>
               </Pressable>
           </KeyboardAvoidingView>
       </>
   )
}

export default LoginScreen;
