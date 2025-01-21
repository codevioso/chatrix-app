import React, {useState} from 'react';
import {Image, Pressable, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import profileStyles from "../../../stylesheet/pages/profileStyles";
import stylesheet from "../../../stylesheet/stylesheet";
import images from "../../../constants/images";
import PrimaryButton from "../../../components/PrimaryButton";

function ProfileEditScreen({navigation}) {
    const [focusedInput, setFocusedInput] = useState(null); // Track which input is focused
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        avatar: null,
    });

    const handleInputChange = (key, value) => {
        setFormData({...formData, [key]: value});
    };

    const handleFocus = (inputName) => {
        setFocusedInput(inputName);
    };

    const handleAvatarUpload = async () => {
        /*  const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (!permissionResult.granted) {
              alert('Permission to access gallery is required!');
              return;
          }

          const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              quality: 1,
          });

          if (!result.canceled) {
              setFormData({ ...formData, avatar: result.assets[0].uri });
          }*/
    };

    return (
        <SafeAreaView>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={profileStyles.profileContainer}>
                    <View style={profileStyles.header}>
                        <Pressable
                            style={[stylesheet.dFlex, stylesheet.flexRow, stylesheet.alignItemsCenter, stylesheet.flexGap5]}
                            onPress={() => navigation.goBack()}
                        >
                            <Image source={images.arrowLeft}/>
                            <Text style={[stylesheet.fontSize16]}>Back</Text>
                        </Pressable>
                    </View>


                    <View style={[stylesheet.width90]}>
                        {/* Avatar Upload */}
                        <TouchableOpacity style={profileStyles.avatarContainer} onPress={handleAvatarUpload}>
                            {formData.avatar ? (
                                <Image source={{uri: formData.avatar}} style={profileStyles.avatar}/>
                            ) : (
                                <Text style={profileStyles.avatarPlaceholder}>Upload Avatar</Text>
                            )}
                        </TouchableOpacity>

                        {/* Form Inputs */}
                        <TextInput
                            style={[stylesheet.formControl, stylesheet.marginBottom20, focusedInput === 'email' && stylesheet.inputFocused]}
                            placeholder="Name"
                            value={formData.name}
                            onChangeText={(text) => handleInputChange('name', text)}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onFocus={() => handleFocus('name')}
                        />
                        <TextInput
                            style={[stylesheet.formControl, stylesheet.marginBottom20, focusedInput === 'username' && stylesheet.inputFocused]}
                            placeholder="Username"
                            value={formData.username}
                            onChangeText={(text) => handleInputChange('username', text)}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onFocus={() => handleFocus('username')}
                        />
                        <TextInput
                            style={[stylesheet.formControl, stylesheet.marginBottom30, focusedInput === 'email' && stylesheet.inputFocused]}
                            placeholder="Email"
                            value={formData.email}
                            keyboardType="email-address"
                            onChangeText={(text) => handleInputChange('email', text)}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onFocus={() => handleFocus('email')}
                        />

                        {/* Submit Button */}
                        <PrimaryButton onPress={() => navigation.navigate('ProfileScreen')}>
                            Submit
                        </PrimaryButton>

                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default ProfileEditScreen;
