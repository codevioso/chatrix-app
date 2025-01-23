import {KeyboardAvoidingView, SafeAreaView, Text, View} from "react-native";
import Header from "./Shared/Header";

function Layout({children, title}) {
    return (
        <SafeAreaView style={{flex: 1}}>
            <KeyboardAvoidingView style={{flex: 1}} behavior="padding">

                <View style={{flex: 1, width: '100%'}}>
                    {children}
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default Layout;
