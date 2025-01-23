import {StyleSheet} from "react-native";
import colors from "../constants/colors";
// Generate dynamic margin styles
const createDynamicMargins = () => {
    let marginStyles = {};

    for (let i = 0; i <= 1000; i += 1) {
        marginStyles[`marginTop${i}`] = {
            marginTop: i,
        };
        marginStyles[`marginBottom${i}`] = {
            marginBottom: i,
        };
        marginStyles[`marginLeft${i}`] = {
            marginLeft: i,
        };
        marginStyles[`marginRight${i}`] = {
            marginRight: i,
        };
    }

    return marginStyles;
};

// Generate dynamic margin styles
const createDynamicPaddings = () => {
    let paddingStyles = {};

    for (let i = 0; i <= 1000; i += 1) {
        paddingStyles[`padding${i}`] = {
            padding: i,
        };
        paddingStyles[`paddingTop${i}`] = {
            paddingTop: i,
        };
        paddingStyles[`paddingBottom${i}`] = {
            paddingBottom: i,
        };
        paddingStyles[`paddingLeft${i}`] = {
            paddingLeft: i,
        };
        paddingStyles[`paddingRight${i}`] = {
            paddingRight: i,
        };
    }

    return paddingStyles;
};
// Generate dynamic Font size styles
const createDynamicFontSizes = () => {
    let fontSize = {};

    for (let i = 0; i <= 1000; i += 1) {
        fontSize[`fontSize${i}`] = {
            fontSize: i,
        };
    }

    return fontSize;
};
// Generate dynamic Font weight styles
const createDynamicFontWeights = () => {
    let fontWeight = {};

    for (let i = 100; i <= 900; i += 100) {
        fontWeight[`fontWeight${i}`] = {
            fontWeight: i,
        };
    }

    return fontWeight;
};

// Generate dynamic Width Percent styles
const createDynamicWidthPercent = () => {
    let width = {};

    for (let i = 0; i <= 100; i++) {
        width[`width${i}`] = {
            width: i + '%',
        };
    }

    return width;
};

// Generate dynamic Width styles
const createDynamicWidth = () => {
    let width = {};

    for (let i = 0; i <= 500; i++) {
        width[`w${i}`] = {
            width: i,
        };
    }

    return width;
};

// Generate dynamic Height percent styles
const createDynamicHeightPercent = () => {
    let height = {};

    for (let i = 0; i <= 100; i++) {
        height[`height${i}`] = {
            height: i + '%',
        };
    }

    return height;
};

// Generate dynamic Height styles
const createDynamicHeight = () => {
    let height = {};

    for (let i = 0; i <= 500; i++) {
        height[`h${i}`] = {
            height: i + 'px',
        };
    }

    return height;
};

// Generate dynamic positioning styles
const createDynamicPositioning = () => {
    let positioning = {};

    for (let i = 0; i <= 100; i += 10) {
        positioning[`top${i}`] = {
            top: i,
        };
        positioning[`right${i}`] = {
            right: i,
        };
        positioning[`bottom${i}`] = {
            bottom: i,
        };
        positioning[`left${i}`] = {
            left: i,
        };
    }

    return positioning;
};
// Generate dynamic flex gap styles
const createDynamicFlexGap = () => {
    let gap = {};

    for (let i = 0; i <= 100; i++) {
        gap['flexGap' + i] = {
            gap: i,
        };
    }

    return gap;
};


const stylesheet = StyleSheet.create({
    ...createDynamicMargins(), // Add generated margin styles here
    ...createDynamicPaddings(), // Add generated padding styles here
    ...createDynamicFontSizes(), // Add generated font size styles here
    ...createDynamicFontWeights(), // Add generated font weight styles here
    ...createDynamicWidthPercent(), // Add generated width percent styles here
    ...createDynamicWidth(), // Add generated width percent styles here
    ...createDynamicHeight(), // Add generated height styles here
    ...createDynamicHeightPercent(), // Add generated height percent styles here
    ...createDynamicPositioning(), // Add generated positioning styles here
    ...createDynamicFlexGap(), // Add generated flex gap styles here

    /*Alignment*/
    textCenter: {textAlign: 'center'},
    textStart: {textAlign: 'left'},
    textEnd: {textAlign: 'right'},

    /*Width & height*/
    w100: {
        width: '100%',
    },
    h100: {
        height: '100%',
    },

    /*Flex*/
    dFlex: {display: 'flex'},
    flex1: {flex: 1},
    justifyCenter: {justifyContent: 'center'},
    justifyStart: {justifyContent: 'flex-start'},
    justifyBetween: {justifyContent: 'space-between'},
    alignItemsCenter: {alignItems: 'center'},
    alignItemsStart: {alignItems: 'flex-start'},
    alignItemsEnd: {alignItems: 'flex-end'},
    alignSelfEnd: {alignSelf: 'flex-end'},
    flexRow: {flexDirection: 'row'},
    flexColumn: {flexDirection: 'column'},
    flexWrap: {flexWrap: 'wrap'},


    /* Positions */
    positionRelative: {
        position: 'relative',
    },
    positionAbsolute: {
        position: 'absolute',
    },
    positionStatic: {
        position: 'static',
    },
    positionFixed: {
        position: 'fixed', // Note: In React Native, 'fixed' behaves like 'absolute'
    },
    positionSticky: {
        position: 'sticky', // Rarely used in React Native, more useful in web development
    },
    overflowHidden: {
        overflow: 'hidden',
    },
    overflowAuto: {
        overflow: 'auto',
    },

    alertSuccess: {
        padding: 20,
        borderColor: colors.lightVar1,
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: colors.greenOp25,
        textAlign:"center",
        alignItems:"center"
    },

    alertSuccessText: {
        color: colors.darkGreen,
    },

    errorText:{
        color:colors.danger,
        fontSize:12,
        marginTop:2,
        marginLeft:5,
    },
    errorTextG:{
        color:colors.danger,
        fontSize:12,
        marginTop:2,
        marginLeft:5,
        textAlign:'center',
        backgroundColor:colors.dangerOpacity15,
        width:"100%",
        paddingHorizontal:30,
        paddingVertical:20,
        borderRadius:12,
    },

    formControl: {
        width:'100%',
        backgroundColor: colors.white,
        borderRadius: 15,
        padding: 20,
        fontSize: 16,
        color: colors.blackVar1,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 3,
        outline:'none',
        borderWidth:1,
        borderColor:'transparent',
    },

    inputFocused:{
        borderWidth: 1, // Add border on focus
        borderColor: colors.lightVar2, // Light gray border color
        transitionProperty:'ease',
        transitionDuration:'.3s'
    },

    iconBtn:{
        backgroundColor:colors.white,
        padding:15,
        borderRadius:15,
        height:62,
        borderWidth:1,
        borderColor:colors.lightVar2,
        justifyContent:"center",
        alignItems:'center',
        display:"flex"
    }


})

export default stylesheet;
