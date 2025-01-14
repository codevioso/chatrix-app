import {ImageStyle, TextStyle, ViewStyle} from "react-native";

 export interface HomepageInterface  {
    background: ViewStyle;
    logo: ImageStyle;
    homeImage: ImageStyle;
    card: ViewStyle;
    gradient: ViewStyle;
    title: TextStyle;
    description: TextStyle;
    buttonPrimary: ViewStyle;
    buttonTextPrimary: ViewStyle;
    buttonTextSecondary: ViewStyle;
}
