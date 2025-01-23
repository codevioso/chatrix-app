import {ActivityIndicator, Text, View} from "react-native";
import PrimaryButton from "../../../components/PrimaryButton";
import colors from "../../../constants/colors";
import {useContext, useState} from "react";
import stylesheet from "../../../stylesheet/stylesheet";
import {AuthContext} from "../../../store/auth-context";
import Toast from "react-native-toast-message";
import Layout from "../Layout/Layout";

const DashboardScreen = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    const authCtx = useContext(AuthContext);
    function logout(){
        Toast.show({
            type:'success',
            text1:'Logout Success!',
            text2:'You have been successfully logged out!',
        })

        setTimeout(() => {
            authCtx.logout();
        },1000);
    }
    return (
        <>
            <Toast/>
          <Layout title={'Dashboard'}>
              <View style={[stylesheet.flex1, stylesheet.justifyCenter, stylesheet.alignItemsCenter]}>
                  <Text style={[stylesheet.fontSize30, stylesheet.marginBottom20]}>Welcome</Text>
                  <Text style={[stylesheet.fontSize20, stylesheet.marginBottom20]}>You have successfully logged in.</Text>
                  <PrimaryButton onPress={logout}>
                      {loading ? (
                          <ActivityIndicator size={'small'} color={colors.white}/>
                      ) : ('Logout')}
                  </PrimaryButton>
              </View>
          </Layout>
        </>
    )
}

export default DashboardScreen;
