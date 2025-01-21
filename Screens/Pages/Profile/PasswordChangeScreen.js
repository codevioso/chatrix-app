import React, {useState} from 'react';
import {Image, Pressable, SafeAreaView, ScrollView, Text, TextInput, View} from "react-native";
import profileStyles from "../../../stylesheet/pages/profileStyles";
import stylesheet from "../../../stylesheet/stylesheet";
import images from "../../../constants/images";
import PrimaryButton from "../../../components/PrimaryButton";

function PasswordChangeScreen({navigation}) {
    const [focusedInput, setFocusedInput] = useState(null); // Track which input is focused
    const [formData, setFormData] = useState({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const handleInputChange = (key, value) => {
        setFormData({...formData, [key]: value});
    };

    const handleFocus = (inputName) => {
        setFocusedInput(inputName);
    };

    return (
        <SafeAreaView>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={profileStyles.profileContainer}>
                    <View style={[profileStyles.header, stylesheet.marginBottom20]}>
                        <Pressable
                            style={[stylesheet.dFlex, stylesheet.flexRow, stylesheet.alignItemsCenter, stylesheet.flexGap5]}
                            onPress={() => navigation.goBack()}
                        >
                            <Image source={images.arrowLeft}/>
                            <Text style={[stylesheet.fontSize16]}>Back</Text>
                        </Pressable>
                    </View>


                    <View style={[stylesheet.width90]}>

                        <View style={[stylesheet.dFlex, stylesheet.alignItemsCenter]}>
                            <Image style={{width: 150, height: 150}} source={images.logo}/>
                        </View>

                        <Text style={[stylesheet.marginBottom70,stylesheet.textCenter,stylesheet.fontSize20,stylesheet.fontWeight600]}>Change your password</Text>

                        {/* Current Password */}
                        <TextInput
                            style={[stylesheet.formControl, stylesheet.marginBottom20,focusedInput === 'current_password' && stylesheet.inputFocused]}
                            placeholder="Current Password"
                            secureTextEntry
                            value={formData.current_password}
                            onChangeText={(text) => handleInputChange('current_password', text)}
                        />

                        {/* New Password */}
                        <TextInput
                            style={[stylesheet.formControl, stylesheet.marginBottom20,focusedInput === 'password' && stylesheet.inputFocused]}
                            placeholder="New Password"
                            secureTextEntry
                            value={formData.password}
                            onChangeText={(text) => handleInputChange('password', text)}
                        />

                        {/* Confirm New Password */}
                        <TextInput
                            style={[stylesheet.formControl, stylesheet.marginBottom30,focusedInput === 'password_confirmation' && stylesheet.inputFocused]}
                            placeholder="Confirm New Password"
                            secureTextEntry
                            value={formData.password_confirmation}
                            onChangeText={(text) => handleInputChange('password_confirmation', text)}
                        />

                        {/* Submit Button */}
                        <PrimaryButton onPress={() => navigation.navigate('ProfileScreen')}>
                            Change Password
                        </PrimaryButton>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default PasswordChangeScreen;
