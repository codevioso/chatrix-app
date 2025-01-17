import {ActivityIndicator, Text, View} from "react-native";
import PrimaryButton from "../../../components/PrimaryButton";
import colors from "../../../constants/colors";
import {useContext, useState} from "react";
import stylesheet from "../../../stylesheet/stylesheet";
import {AuthContext} from "../../../store/auth-context";

const DashboardScreen = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    const authCtx = useContext(AuthContext);
    return (
        <>
           <View style={[stylesheet.flex1, stylesheet.justifyCenter, stylesheet.alignItemsCenter]}>
               <Text style={[stylesheet.fontSize30, stylesheet.marginBottom20]}>Welcome</Text>
               <Text style={[stylesheet.fontSize20, stylesheet.marginBottom20]}>You have successfully logged in.</Text>
               <PrimaryButton onPress={authCtx.logout}>
                   {loading ? (
                       <ActivityIndicator size={'small'} color={colors.white}/>
                   ) : ('Logout')}
               </PrimaryButton>
           </View>
        </>
    )
}

export default DashboardScreen;
