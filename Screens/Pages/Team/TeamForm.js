import React, {useState} from 'react';
import {Alert, SafeAreaView, Text, Image, TextInput, TouchableOpacity, View, Pressable} from "react-native";
import PrimaryButton from "../../../components/PrimaryButton";
import teamStyles from "../../../stylesheet/pages/teamStyles";
import stylesheet from "../../../stylesheet/stylesheet";
import * as ImagePicker from 'expo-image-picker';
import images from "../../../constants/images";

function TeamFormScreen({navigation}) {
    const [formData, setFormData] = useState({
        avatar: null,
        title: '',
    });
    // Handle input changes
    const handleInputChange = (key, value) => {
        setFormData({...formData, [key]: value});
    };


    // Handle avatar selection
    const selectAvatar = async () => {
        const permissionResult =
            await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            Alert.alert('Permission Required', 'Camera roll access is required!');
            return;
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,
        });

        if (!pickerResult.canceled) {
            setFormData({...formData, avatar: pickerResult.uri});
        }
    };

    // Handle form submission
    // Handle form submission
    const handleSubmit = () => {
        if (!formData.avatar || !formData.title) {
            Alert.alert('Error', 'Please provide both an avatar and a title.');
            return;
        }

        Alert.alert('Team Created', `Team "${formData.title}" has been created!`);
        setFormData({avatar: null, title: ''});
    };

    return (
        <SafeAreaView style={[stylesheet.padding20,]}>
            {/* Back Button */}
            <View style={[stylesheet.dFlex, stylesheet.flexRow,stylesheet.alignItemsCenter,stylesheet,stylesheet.flexGap20, stylesheet.marginBottom20, stylesheet.marginTop50]}>

                <Pressable
                    style={[stylesheet.dFlex,  stylesheet.flexRow, stylesheet.alignItemsCenter, stylesheet.flexGap5]}
                    onPress={() => navigation.goBack()}
                >
                    <Image source={images.arrowLeft}/>
                    <Text style={[stylesheet.fontSize16]}>Back</Text>
                </Pressable>

                <View></View>
            </View>

            <View style={[stylesheet.w100,stylesheet.alignItemsCenter,stylesheet.marginTop50]}>
               <View style={[stylesheet.width90]}>
                   {/* Avatar Picker */}
                   <TouchableOpacity onPress={selectAvatar} style={teamStyles.avatarPicker}>
                       {formData.avatar ? (
                           <Image
                               source={{uri: formData.avatar}}
                               style={teamStyles.avatarPreview}
                           />
                       ) : (
                           <Text style={teamStyles.avatarPlaceholder}>Select Avatar</Text>
                       )}
                   </TouchableOpacity>

                   {/* Title Input */}
                   <TextInput
                       style={[stylesheet.formControl,stylesheet.marginBottom20]}
                       placeholder="Enter Team Title"
                       value={formData.title}
                       onChangeText={(text) => handleInputChange('title', text)}
                   />

                   {/* Submit Button */}
                   <PrimaryButton>Create Team</PrimaryButton>
               </View>
            </View>

        </SafeAreaView>
    );
}

export default TeamFormScreen;
