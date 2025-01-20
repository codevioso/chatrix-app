
import {View, Text, Image, Pressable} from "react-native";
import headerStyles from "../../../../stylesheet/layout/shared/headerStyles";
import images from "../../../../constants/images";
import stylesheet from "../../../../stylesheet/stylesheet";

function Header({navigation}) {
    return (
        <View style={[headerStyles.header,stylesheet.dFlex,stylesheet.flexRow,stylesheet.justifyBetween,stylesheet.alignItemsCenter]}>
            <Pressable onPress={() => navigation.navigate('ProfileScreen')}>
                <Image style={headerStyles.profile} resizeMode={false} source={images.demoUser}/>
            </Pressable>


            <Image style={{width:30,height:30}} source={images.notificationWhite}/>
        </View>
    );
}

export default Header;
