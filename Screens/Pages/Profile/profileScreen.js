import {View, Text, Image, Button, Pressable} from "react-native";
import images from "../../../constants/images";
import profileStyles from "../../../stylesheet/pages/profileStyles";
import stylesheet from "../../../stylesheet/stylesheet";
import colors from "../../../constants/colors";
import PrimaryButton from "../../../components/PrimaryButton";

function ProfileScreen({navigation}) {
    return (
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


            <Image
                source={images.demoUser} // Replace with your profile image URL
                style={profileStyles.profileImage}
            />
            <Text style={profileStyles.profileName}>Rahat Chowdhury</Text>
            <Text style={profileStyles.profileBio}>
                Web Developer | Passionate about creating unique web designs
            </Text>


            <View
                style={[stylesheet.dFlex, stylesheet.flexRow, stylesheet.justifyBetween, stylesheet.alignItemsCenter,
                    stylesheet.width50, stylesheet.marginBottom15,]}>
                <Text style={[stylesheet.fontWeight700]}>Email:</Text>
                <Text style={{color:colors.blackVar1}}>user@info.com</Text>
            </View>

            <View
                style={[stylesheet.dFlex, stylesheet.flexRow, stylesheet.justifyBetween, stylesheet.alignItemsCenter,
                    stylesheet.width50, stylesheet.marginBottom15,]}>
                <Text style={[stylesheet.fontWeight700]}>Phone:</Text>
                <Text style={{color:colors.blackVar1}}>123 234 5645</Text>
            </View>

            <View
                style={[stylesheet.dFlex, stylesheet.flexRow, stylesheet.justifyBetween, stylesheet.alignItemsCenter,
                    stylesheet.width50, stylesheet.marginBottom15,]}>
                <Text style={[stylesheet.fontWeight700]}>Location:</Text>
                <Text style={{color:colors.blackVar1}}>Los Angels</Text>
            </View>



            <View style={[stylesheet.width75,stylesheet.flexGap10,stylesheet.marginTop50]}>
                <PrimaryButton onPress={() => navigation.navigate('ProfileEditScreen')}>Edit Profile</PrimaryButton>
                <PrimaryButton onPress={() => navigation.navigate('PasswordChangeScreen')}>Change Password</PrimaryButton>
            </View>
        </View>
    );
}


export default ProfileScreen;
