import {ImageStyle, TextStyle, ViewStyle} from "react-native";

export interface HomepageInterface {
    background: ViewStyle;
    logo: ImageStyle;
    homeAuthCover: ImageStyle;
    card: ViewStyle;
    gradient: ViewStyle;
    cardTitle: TextStyle;
    cardDescription: TextStyle;
    buttonPrimary: ViewStyle;
    buttonTextPrimary: ViewStyle;
    buttonTextSecondary: ViewStyle;
}

export interface AuthenticationInterface {
    authContainer: ViewStyle;
    logo: ImageStyle;
    authTitle: TextStyle;
    authInput:ViewStyle,
    authInputFocused:ViewStyle,
    formContent:ViewStyle,
    passIconWrap:ViewStyle,
    passIcon:ViewStyle,
    forgotContainer:ViewStyle,
}
